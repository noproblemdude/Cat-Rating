// cart.test.js

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