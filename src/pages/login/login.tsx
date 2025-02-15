import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Card, CardContent, Typography } from "@mui/material";

const Login = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/home");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md shadow-lg">
        <CardContent className="p-6">
          <Typography variant="h5" className="text-center mb-4">
            Login
          </Typography>
          <form className="space-y-4">
            <TextField label="Email" fullWidth variant="outlined" />
            <TextField label="Password" type="password" fullWidth variant="outlined" />
            <Button 
              variant="contained" 
              color="primary" 
              fullWidth 
              onClick={handleSignIn}
            >
              Sign In
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
