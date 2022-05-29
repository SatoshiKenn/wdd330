const getyear = function displayfooter(id, year) {
  let fullyear = year;
  let p_year = id;
  console.log(fullyear);
  console.log(p_year);
  p_year.innerHTML = `&copy; ${fullyear} Kennette Guevara SV-CL`;
};

export default getyear;
