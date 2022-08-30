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
 */
export {};
