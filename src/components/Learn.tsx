import { ArrowBack, VolumeUp } from "@mui/icons-material";
import { Button, Container, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getTranslation } from "../apis/feature";
import { useDispatch, useSelector } from "react-redux";
import { getWordsFail, getWordsRequest, getWordsSuccess } from "../redux/slices";


const Learn = () => {
  const [count, setCount] = useState<number>(0);
  const params = useSearchParams()[0].get("language") as LanguageType;
  const { words } = useSelector((state: { root: QuizState }) => state.root);
 
  console.log(words, "words")
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const nextHandler = (): void => {
    setCount((prev) => prev + 1);
  };


useEffect(() => {
  dispatch(getWordsRequest())
 getTranslation(params).then((arr)=>{
   dispatch(getWordsSuccess(arr))
}).catch(err => {
  console.log(err)
  dispatch(getWordsFail(err))
})
},[])
  

  return (
    <div>
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
        <Typography m={"2rem 0"}>Learning Made Quicker</Typography>
        <Stack direction={"row"} spacing={"1rem"}>
          <Typography variant="h5">
            {count + 1} - {words[count]?.meaning}
          </Typography>
          <Typography color="blue" variant="h5">
            : {words[count]?.word}
          </Typography>
          <Button
            sx={{
              borderRadius: "100%",
            }}
          >
            <VolumeUp />
          </Button>
        </Stack>
        <Button
          variant="contained"
          fullWidth
          sx={{ margin: "3rem 0" }}
          onClick={count === 7 ? () => navigate("/quiz") : nextHandler}
        >
          {count === 7 ? "Test your learning" : "Next"}
        </Button>
      </Container>
    </div>
  );
};

export default Learn;
 