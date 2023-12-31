const { Vaccination } = require("../models/vaccination.model");

exports.getVaccination = async (user_id) => {
  try {
    const vaccinations = await Vaccination.find({
      user_id: user_id,
    });
    console.log("My Vaccine");
    return vaccinations;
  } catch (error) {
    console.error("Error fetching vaccination details:", error);
    throw error;
  }
};

exports.createVaccination = async (user_id, vaccine_id, vaccination_date) => {
  try {
    const vaccination = new Vaccination({
      user_id: user_id,
      vaccine_id: vaccine_id,
      vaccination_date: vaccination_date,
    });

    const newVaccination = await vaccination.save();

    return newVaccination;
  } catch (error) {
    console.log(error);
    throw new Error("Database Error when creating user");
  }
};
