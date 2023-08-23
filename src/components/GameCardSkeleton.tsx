import { Card, Skeleton, SkeletonText, CardBody } from "@chakra-ui/react";
import React from "react";

const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton></Skeleton>
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
