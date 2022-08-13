import { GetStaticProps, InferGetStaticPropsType } from 'next';
import dynamic from 'next/dynamic';
import { createSwaggerSpec } from 'next-swagger-doc';
import 'swagger-ui-react/swagger-ui.css';

const SwaggerUI = dynamic(import('swagger-ui-react'), { ssr: false });

const V1 = ({ spec }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return <SwaggerUI spec={spec} />;
};

export const getStaticProps: GetStaticProps = async (ctx) => {
    const spec: Record<string, any> = createSwaggerSpec({
        definition: {
            openapi: '3.0.0',
            info: {
                title: 'Template Next.js',
                version: '1.0',
            },
        },
        apis: ['pages/api/v1/**/*.ts'],
    });

    return {
        props: {
            spec,
        },
    };
};

export default V1;
