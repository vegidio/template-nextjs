/**
 * @openapi
 * components:
 *   schemas:
 *     Auth:
 *       type: object
 *       properties:
 *         jwt:
 *           type: string
 *           example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.....RcJQn_lh65ObDgRk8watBZvX7qM_N16eb-LMiNuwJWk
 *     Country:
 *       type: object
 *       properties:
 *         name:
 *           type: object
 *           properties:
 *             common:
 *               type: string
 *               example: Sweden
 *             official:
 *               type: string
 *               example: Kingdom of Sweden
 *             nativeName:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   language:
 *                     type: string
 *                     example: swe
 *                   common:
 *                     type: string
 *                     example: Sverige
 *                   official:
 *                     type: string
 *                     example: Konungariket Sverige
 *     ApiError:
 *       type: object
 *       properties:
 *         type:
 *           type: string
 *           example: AUTH_INVALID
 *         status:
 *           type: number
 *           example: 401
 *         title:
 *           type: string
 *           example: Authenticated is invalid
 *         detail:
 *           type: string
 *           example: A authorization token must be provided to access this endpoint.
 *         instance:
 *           type: string
 *           example: /api/v1/countries
 *   securitySchemes:
 *     general_auth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */
export {};
