import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Spinner from '../../components/Spinner/Spinner'

const Character = () => {
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://hp-api.onrender.com/api/character/${router.query.id}`
        );
        setCharacter(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [router.query.id]);

  console.log(character);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : character ? (
        <div>
          <h2>{character[0].name}</h2>
          <p>Species: {character[0].species}</p>
          <p>House: {character[0].house}</p>
          
        </div>
      ) : (
        <p>No character found</p>
      )}
    </div>
  );
};

export default Character;
