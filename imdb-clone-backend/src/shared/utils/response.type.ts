type ResponseMessageType = {
  httpStatus: number;
  caseCode: string;
  message: string;
};

export type TresponseMessage = {
  [key: string]: ResponseMessageType;
};
