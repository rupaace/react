import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Button,
  } from "@material-tailwind/react";
  import { Link } from "react-router-dom";
   
  export default function Example() {
    return (
        <>
        <div className="flex justify-center ">
      <Card className="w-96  mt-20">
        <CardHeader
          variant="gradient"
          color="purple"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Sign In
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input label="Email" size="lg" />
          <Input label="Password" size="lg" />
          <div className="-ml-2.5">
            <Checkbox label="Remember Me" />
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" color="purple" fullWidth>
            Sign In
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Don't have an account?
            <Typography
              as="a"
              href="#signup"
              variant="small"
              color="blue"
              className="ml-1 font-bold text-purple-500"
            >
              Sign up
            </Typography>
          </Typography>

        </CardFooter>
       <Link to={'/'} className="flex justify-center text-purple-500 text-lg">
        Back To Home
       </Link>
      </Card>
      </div>
      </>
    );
  }