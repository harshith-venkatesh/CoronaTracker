import React from "react";
import "./App.module.css";
import Cards from "./Components/Cards/Cards";
import CountryPicker from "./Components/CountryPickers/CountryPicker";
import Charts from "./Components/Charts/Charts";
import { fetchData } from "./Components/Api/index";
import styles from "./App.module.css";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    console.log(fetchedData);
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };
  render() {
    const { data, country } = this.state;
    return (
      <React.Fragment>
        <div className={styles.container}>
          <img
            className={styles.image}
            src="https://i.ibb.co/7QpKsCX/image.png"
            alt="Covid-19"
          />
          <Cards data={data} />
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Charts data={data} country={country} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
