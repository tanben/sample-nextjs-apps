const { faker } = require("@faker-js/faker");

export function createRandomUser() {
  return {
    kind: "multi",
    user: {
      key: faker.string.uuid(),
      name: faker.person.fullName(),
      state: faker.location.state(),
      city: faker.location.city(),
      country: faker.location.country(),
    },
    subscription: {
      key: faker.helpers.arrayElement(["free", "basic", "pro", "enterprise"]),
    },
    application: {
      key: faker.helpers.arrayElement([
        "autobahn",
        "electfast",
        "bluelightning",
      ]),
      version: faker.system.semver(),
    },
    department: createKeyFromName(
      faker.helpers.arrayElement(["grocery", "hr", "engineering"])
    ),
    company: createKeyFromName(faker.company.name()),
  };
}

function createKeyFromName(name) {
  const key = name.toLocaleLowerCase().replaceAll(/\W+/g, "-");
  return { name, key };
}
