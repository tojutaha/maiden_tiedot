const Country = ({ countries }) => {
  //console.log(countries);
  //console.log(countries[0].name.common);

  let i = 0;
  return (
    <ul>
      {countries.map((country) => (
        <li key={i++}>
          {country.name.common}
        </li>
      ))}
    </ul>
  )
}

export default Country