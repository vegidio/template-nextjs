/**
 * @openapi
 * components:
 *   schemas:
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
