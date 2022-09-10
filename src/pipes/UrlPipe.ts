import { BadRequestException } from 'next-api-decorators';
import { ParameterPipe, PipeMetadata, PipeOptions } from 'next-api-decorators/dist/pipes/ParameterPipe';

export const UrlPipe =
    (options?: PipeOptions): ParameterPipe<string> =>
    (value: any, metadata?: PipeMetadata) => {
        if (value === undefined)
            throw new BadRequestException('ERR_URL_MISSING', [`Query parameter '${metadata?.name}' is required`]);

        const url = decodeURIComponent(value);
        const regex =
            /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi;

        if (!regex.test(url))
            throw new BadRequestException('ERR_URL_INVALID', [
                `Query parameter '${metadata?.name}' should be a valid URL`,
            ]);

        return url;
    };
