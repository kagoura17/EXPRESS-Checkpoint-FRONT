const checkWorkingHours = (req, res, next) => {
  const now = new Date();
  const dayOfWeek = now.getDay();
  const hourOfDay = now.getHours();

  if (dayOfWeek >= 1 && dayOfWeek <= 5 && hourOfDay >= 9 && hourOfDay < 17) {
    next();
  } else {
    res
      .status(403)
      .send(
        "Sorry, the application is only available during working hours (Monday to Friday, from 9 AM to 5 PM)."
      );
  }
};

module.exports = checkWorkingHours;
