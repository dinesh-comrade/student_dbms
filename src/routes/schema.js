const Items = {
  type: "object",
  properties: {
    _id: { type: "string" },
    first_name: { type: "string" },
    last_name: { type: "string" },
    course: { type: "string" },
    branch: { type: "string" },
    year: { type: "integer" },
    semester: { type: "integer" },
    cgpa: { type: "number" },
    dob: { type: "string" },
    gender: { type: "string" },
    email: { type: "string" },
    phone: { type: "integer" },
  },
};

const getItemsOpt = {
  schema: {
    response: {
      200: {
        type: "array",
        items: Items,
      },
    },
  },
};

const getItemOpt = {
  schema: {
    response: {
      200: Items,
    },
  },
};

const postItemOpt = {
  schema: {
    body: {
      type: "object",
      required: [
        "first_name",
        "last_name",
        "course",
        "branch",
        "year",
        "semester",
        "cgpa",
        "dob",
        "gender",
        "email",
        "phone",
      ],
      properties: Items.properties,
    },
    response: {
      201: Items,
    },
  },
};

const updateItemOpt = {
  schema: {
    body: {
      type: "object",
      properties: Items.properties,
    },
    response: {
      200: Items,
    },
  },
};

const deleteItemOpt = {
  schema: {
    response: {
      200: Items,
    },
  },
};

module.exports = {
  getItemsOpt,
  getItemOpt,
  postItemOpt,
  updateItemOpt,
  deleteItemOpt,
};
