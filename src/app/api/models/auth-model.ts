/* tslint:disable */
/* eslint-disable */
export interface AuthModel {
  expiresOn?: string | null;
  jwt?: string | null;
  refreshTokenExpiration?: string;
  roles?: Array<string> | null;
}
