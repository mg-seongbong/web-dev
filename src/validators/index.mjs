"use strict";

import { celebrate, Segments, Joi } from "celebrate";

// sample
export const checkAPI = celebrate({
  [Segments.QUERY]: Joi.object({
    id: Joi.string().min(24).max(24),
  }),
  [Segments.BODY]: Joi.object({
    name: Joi.string().required(),
  }),
});
