import { View, Text, StatusBar, ScrollView, Image } from "react-native";
import React, { Component } from "react";
import Constants from "./../utilities/Constants";
import { callRemoteMethod } from "../utilities/WebServiceHandler";
import Loader from "../utilities/Loader";
import Styles from "./Styles";

/**
 * @author Vaibhav Padalia
 * @description This component shows detailed description about 
 * a movie (id) that has been passed from previous component.
 */
class SecondScreen extends Component {
  static navigationOptions = {
    headerTitle: Constants.Strings.SECONDARY_TITLE,
    headerRight: <View />
  };

  state = {
    movieDetails: {}, // Will contain details about a particular movie. 
    isLoading: false // Whether loader is to be shown
  };

  componentDidMount() {
    this.getMovieDetails();
  }

  /**
   * @description Get details of the movie.
   */

  getMovieDetails = () => {
    var endpoint = Constants.URL.BASE_URL + "movie/" + this.props.navigation.state.params.id + "?" + Constants.URL.API_KEY;
    callRemoteMethod(this, endpoint, {}, "getMovieDetailsCallback", "GET", true);
  };

  /**
   * @description Set data into movieDetails
   */

  getMovieDetailsCallback = response => {
    this.setState({ movieDetails: response });
  };

  render() {
    return (
      <View style={{ backgroundColor: Constants.Colors.Grey }}>
        <StatusBar backgroundColor={Constants.Colors.Cyan} barStyle="light-content" />
        {this.state.isLoading ? <Loader show={true} loading={this.state.isLoading} /> : null}
        <ScrollView style={Styles.movieCard} showsVerticalScrollIndicator={false}>
          <View style={{ alignItems: "center" }}>
            <Image
              style={Styles.image}
              source={{
                uri:
                  this.state.movieDetails.poster_path != null
                    ? Constants.URL.IMAGE_URL + this.state.movieDetails.poster_path
                    : Constants.URL.PLACEHOLDER_IMAGE
              }}
            />
            <Text style={{ fontSize: 16, margin: 5, fontWeight: "bold" }}>{this.state.movieDetails.original_title}</Text>
          </View>
          <View style={{ flexDirection: "row", margin: 10 }}>
            <Text style={{ flex: 0.5 }}>{Constants.Strings.STATUS}</Text>
            <Text style={{ flex: 0.5 }}>{this.state.movieDetails.status}</Text>
          </View>
          <View style={{ flexDirection: "row", margin: 10 }}>
            <Text style={{ flex: 0.5 }}>{Constants.Strings.RATINGS}</Text>
            <Text style={{ flex: 0.5 }}>
              {this.state.movieDetails.vote_average}
              /10
            </Text>
          </View>
          <View style={{ flexDirection: "row", margin: 10 }}>
            <Text style={{ flex: 0.5 }}>{Constants.Strings.POPULARITY}</Text>
            <Text style={{ flex: 0.5 }}>{this.state.movieDetails.popularity}%</Text>
          </View>
          <View style={{ flexDirection: "row", margin: 10 }}>
            <Text style={{ flex: 0.5 }}>{Constants.Strings.BUDGET}</Text>
            <Text style={{ flex: 0.5 }}>${this.state.movieDetails.budget}</Text>
          </View>
          <View style={{ flexDirection: "row", margin: 10 }}>
            <Text style={{ flex: 0.5 }}>{Constants.Strings.REVENUE}</Text>
            <Text style={{ flex: 0.5 }}>${this.state.movieDetails.revenue}</Text>
          </View>
          <View style={{ flexDirection: "row", margin: 10 }}>
            <Text style={{ flex: 0.5 }}>{Constants.Strings.RUNTIME}</Text>
            <Text style={{ flex: 0.5 }}>{this.state.movieDetails.runtime} min</Text>
          </View>
          <View style={{ flexDirection: "row", margin: 10 }}>
            <Text style={{ flex: 0.5 }}>{Constants.Strings.LANGUAGE}</Text>
            <Text style={{ flex: 0.5 }}>{this.state.movieDetails.original_language}</Text>
          </View>
          <View style={{ margin: 10 }}>
            <Text style={{ flex: 0.2 }}>{Constants.Strings.OVERVIEW}</Text>
          </View>
          <View style={{ margin: 10 }}>
            <Text style={{ flexWrap: "wrap", flex: 0.8 }}>{this.state.movieDetails.overview}</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default SecondScreen;
