import { BadRequestException } from 'next-api-decorators';
import { ParameterPipe, PipeMetadata, PipeOptions } from 'next-api-decorators/dist/pipes/ParameterPipe';

export const CountryCodePipe =
    (options?: PipeOptions): ParameterPipe<string> =>
    (value: string, metadata?: PipeMetadata) => {
        if (value.length != 3) {
            throw new BadRequestException('ERR_COUNTRY_CODE', ['The country code must be 3 characters long']);
        }

        return value.toUpperCase();
    };
