import client from "twilio";

import { twilioConfig } from "../config";
import { MessageInstance } from "twilio/lib/rest/api/v2010/account/message";

const accountSid = twilioConfig.accountSid;
const authToken = twilioConfig.authToken;
const twilioNumber = twilioConfig.twilioNumber;

const twilioClient = client(accountSid, authToken);

export const sendSMS = async (
  to: string,
  body: string
): Promise<MessageInstance> => {
  return twilioClient.messages.create({
    body,
    to,
    from: twilioNumber,
  });
};
