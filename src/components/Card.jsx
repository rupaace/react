import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

 
export default function Example( {image, name, discription}) {
  return (
    <Card className="w-96">
      <CardHeader color="gray" className="relative h-56">
        <img
          src={image}
          alt="img-blur-shadow"
          className="h-full w-full"
        />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h5" className="mb-2">
          {name}
        </Typography>
        <Typography>
          {discription}
        </Typography>
      </CardBody>
      </Card>
  );
}