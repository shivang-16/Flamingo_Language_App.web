import { Button, Container, Stack, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"

const Home = () => {

  const languages = [
    {
      name: "Hindi",
      code: "hi",
    },
    {
      name: "Japanese",
      code: "ja",
    },
    {
      name: "Spanish",
      code: "es",
    },
    {
      name: "French",
      code: "fr",
    },
    
  ]

  const navigate = useNavigate()

  const handleClick = (language: string):void => {
    navigate(`/learn?language=${language}`)
  }

  return (
    <div style={{marginTop: "30px"}}>
      
    <Container maxWidth="sm">
      
      <Typography variant="h4" textAlign={"center"}>Welcome to Flamingo, A lanuage learning platform</Typography>
      <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} spacing={"1rem"} margin={"20px 0px 20px 0px"}>
        {languages.map((i) => (
          <Button variant="contained" onClick={() => handleClick(i.code)} key = {i.code}>
            {i.name}
          </Button>
        ))
        }
      </Stack>
      <Typography textAlign={"center"}>Choose Language from above</Typography>
    </Container>

    </div>
  )
}

export default Home