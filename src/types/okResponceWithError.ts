export interface OkWithError {
  data: null;
  error: string;
  errorText: string;
  additionalErrors: string;
}
export class OkWithErrorsResponseDto<T> {
  data: T;
  error: string;
  errorText: string;
  additionalErrors: string;
  constructor({
    data = null,
    error = '',
    errorText = '',
    additionalErrors = '',
  }: Partial<OkWithError>) {
    this.data = data;
    this.error = error;
    this.errorText = errorText;
    this.additionalErrors = additionalErrors;
  }
}
