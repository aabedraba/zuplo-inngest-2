import { ZuploContext, ZuploRequest } from "@zuplo/runtime";

type MyPolicyOptionsType = {
  myOption: any;
};

export default async function (
  response: Response,
  request: ZuploRequest,
  context: ZuploContext,
  options: MyPolicyOptionsType,
  policyName: string
) {
  const clone = response.clone()

  context.log.info(clone.headers.forEach(header => context.log.info))

  return response;
}