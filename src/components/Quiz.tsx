import { ArrowBack } from "@mui/icons-material";
import { Button, Container, Stack, Typography, FormControl, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const [count, setCount] = useState(0);
  const navigate = useNavigate()

  const {words} = useSelector((state: { root: QuizState }) => state.root)

  const nextHandler = ():void  => {
    setCount(prev => prev + 1)
  }
  return (
    <Container
      maxWidth="sm"
      sx={{
        padding: "1.5rem",
      }}
    >
      <Button
          onClick={
            count === 0
              ? () => navigate("/")
              : () => setCount((prev) => prev - 1)
          }
        >
        <ArrowBack />
      </Button>
      <Typography m={"2rem 0"}>Quick Quiz</Typography>
      <Stack direction={"row"} spacing={'1rem'}>
        <Typography variant="h5" >{count + 1} - Meaning of word</Typography>
        <Typography color="blue" variant="h5" >
          : {words[count]?.word}
        </Typography>
      
      </Stack>
    <FormControl sx={{
      margin: "1rem "
    }}>
  <RadioGroup>
 {  words[count].options.map(it => <FormControlLabel value={it} control={<Radio />} label={it} />)}
    
  </RadioGroup>
</FormControl>
      <Button 
      variant="contained" 
      fullWidth sx={{ margin: "3rem 0" }}
      onClick={count === 8 ? ()=> navigate('/result') :  nextHandler}
      >
        {count === 8 ? "Result" :  "Next"}
      </Button>
    </Container>
  );
};

export default Quiz;
