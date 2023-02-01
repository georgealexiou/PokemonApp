import React from "react";
import { View } from "react-native";
import { theme } from "../../../../themes/theme";

type SpacerProps = {
  numberOfSpaces: number;
};

type FlexSpacerProps = {
  flex?: number;
  grow?: boolean;
};

const Row = ({ numberOfSpaces }: SpacerProps) => (
  <View style={{ width: theme.spacing(numberOfSpaces) }} />
);
const Column = ({ numberOfSpaces }: SpacerProps) => (
  <View style={{ height: theme.spacing(numberOfSpaces) }} />
);
const Flex = ({ flex, grow }: FlexSpacerProps) => (
  <View style={{ flex: flex ?? 1, flexGrow: grow ? 1 : undefined }} />
);

export const Spacer = {
  Flex,
  Row,
  Column,
};
