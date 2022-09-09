import { BadRequestException } from 'next-api-decorators';
import { ParameterPipe, PipeMetadata, PipeOptions } from 'next-api-decorators/dist/pipes/ParameterPipe';

export const RequiredPipe =
    (options?: PipeOptions): ParameterPipe<string> =>
    (value: any, metadata?: PipeMetadata) => {
        if (value !== undefined) return decodeURIComponent(value);
        throw new BadRequestException('Bad Request', [`The query parameter '${metadata?.name}' is required`]);
    };
