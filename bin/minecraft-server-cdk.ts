#!/usr/bin/env node

import "dotenv/config";
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { MinecraftServerCdkStack } from "../lib/minecraft-server-cdk-stack";

const app = new cdk.App();
new MinecraftServerCdkStack(app, "MinecraftServerCdkStack", {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});
