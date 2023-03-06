import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
const Img = styled.img`
  object-fit: cover;
  height: 362px;
  width: 280px;
`;
const Movie = styled.div``;
const MovieContainer = styled.div`
  display: flex;
  backgound-color: red;
  flex-direction: column;
  padding: 10px;
  width: 280px;
  box-shadow: 0 3px 10px 0 #aaa;
  cursor: pointer;
  justify-content: left;
`;
const MovieName = styled.span`
font-size:18px;
backgrond-color: red;
font-weight:600:
color:black;
margin :15px 0;
white-space:nowrap;
text-overflow:ellipsis;
overflow:hidden;
`;
const InfoCol = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const MovieInfo = styled.span`
font-size:18px;
font-weight:600:
color:black;
text-transform:capitalize;
`;
const FavBtn = styled.button`
  margin: 10px;
  cursor: pointer;
`;
const Div = styled.div`
  z-index: 1;
`;
const MovieComponent = () => {
  const [movies, setMovies] = useState([]);
  const getMovieReq = async () => {
    const url = "https://www.omdbapi.com/?s=Star wars&apikey=5550b3a6";
    const response = await fetch(url);
    const responseJson = await response.json();
    setMovies(responseJson.Search);
  };

  useEffect(() => {
    getMovieReq();
  }, []);

  return (
    <>
      {movies?.map((movie, index) => (
        <MovieContainer>
          <Img src={movie.Poster} />
          <MovieName>{movie.Title}</MovieName>
          <InfoCol>
            <MovieInfo>Year: {movie.Year}</MovieInfo>
            <MovieInfo>Type: {movie.Type}</MovieInfo>
          </InfoCol>
        </MovieContainer>
      ))}
    </>
  );
};

export default MovieComponent;
