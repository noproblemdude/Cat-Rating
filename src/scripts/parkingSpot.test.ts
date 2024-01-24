import {parkingSpots,parkingSpot } from './parkingSpot';

describe('Tests for the Data classes', () => {
  test("the parkingSpot constructor", () => {
    const long = 40;
    const lat = 16;
    const address = "musterstrasse 10";
    const scooterNumber = 0;
    const spot = new parkingSpot(long, lat, address,scooterNumber)

    expect(spot.getLongitude()).toEqual(long)
    expect(spot.getLatitude()).toEqual(lat)
    expect(spot.getAddress()).toEqual(address)
    expect(spot.getScooterNumber()).toEqual(scooterNumber)
    
  });

  test("tests that parkingspots are created properly", () => {
    const spots = new parkingSpots;

    let testVar = true;

    testVar = spots.getSpotNumber() > 0
    expect(testVar).toEqual(true);
    testVar = spots.getTimestamp != null
    expect(testVar).toEqual(true);
    testVar = spots.getSpot(0) != null
    expect(testVar).toEqual(true);
    testVar = spots.getSpot(0).getLongitude() != null
    expect(testVar).toEqual(true);
    testVar = spots.getSpot(0).getLatitude() != null
    expect(testVar).toEqual(true);
    testVar = spots.getSpot(0).getAddress() != null

  });
})

/*
import { Rating, RatingsList } from "./rating";

describe('Tests for the ratings storage', () => {
  test("the Rating constructor", () => {
    const id = 1;
    const name = "snuggles"
    const ratingScore = 3;
    const email = "testmail@test.com"
    const rating = new Rating(id,name,ratingScore,email);
    
    expect(rating.getid()).toEqual(id);
    expect(rating.getName()).toEqual(name);
    expect(rating.getRating()).toEqual(ratingScore);
    expect(rating.getEmail()).toEqual(email);

  });

  test("Add rating to list of ratings", () => {
    const id = 16;
    const name = "snuggles"
    const ratingScore = 3;
    const email = "testmail@test.com"
    const rating = new Rating(id,name,ratingScore,email);

    const ratingsList = new RatingsList();
    ratingsList.addTolist(rating);
    expect(ratingsList.ratings[0].getid()).toEqual(id);
  });  
})

*/