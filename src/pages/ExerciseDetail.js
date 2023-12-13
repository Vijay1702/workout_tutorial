// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { Box } from '@mui/material';

// import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData';
// import Detail from '../components/Detail';
// import ExerciseVideos from '../components/ExerciseVideos';
// import SimilarExercises from '../components/SimilarExercises';

// const ExerciseDetail = () => {
//   const [exerciseDetail, setExerciseDetail] = useState({});
//   const [exerciseVideos, setExerciseVideos] = useState([]);
//   const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
//   const [equipmentExercises, setEquipmentExercises] = useState([]);
//   const { id } = useParams();

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });

//     const fetchExercisesData = async () => {
//       const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
//       const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

//       const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
//       setExerciseDetail(exerciseDetailData);

//       const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`, youtubeOptions);
//       setExerciseVideos(exerciseVideosData.contents);

//       const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
//       setTargetMuscleExercises(targetMuscleExercisesData);

//       const equimentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
//       setEquipmentExercises(equimentExercisesData);
//     };

//     fetchExercisesData();
//   }, [id]);

//   if (!exerciseDetail) return <div>No Data</div>;

//   return (
//     <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
//       <Detail exerciseDetail={exerciseDetail} />
//       <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
//       <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
//     </Box>
//   );
// };

// export default ExerciseDetail;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchExerciseDetail = async () => {
      try {
        const response = await fetch(`http://localhost:5000/exercises/${id}`); // Endpoint to fetch exercise details by ID from your backend
        const data = await response.json();
        setExerciseDetail(data);
      } catch (error) {
        console.error('Error fetching exercise details:', error);
      }
    };

    fetchExerciseDetail();
  }, [id]);

  if (!exerciseDetail) return <div>No Data</div>;

  return (
    <Box>
      {/* Display exercise details in your component */}
    </Box>
  );
};

export default ExerciseDetail;
