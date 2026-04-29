# Night Club API

## Installation

```bash
npm install
```

## Running the API

```bash
npm start
```

The API will be available at [http://localhost:4000](http://localhost:4000).

For local development with auto-reload:

```bash
npm run dev
```

Useful data scripts:

```bash
npm run backup-db
npm run reset-db
npm run seed
```

`reset-db` and `seed` both restore `db.json` from `db_backup.json`.

## API Contract

Core read endpoints:

- `GET /events`
- `GET /events/:id`
- `GET /events/:slug`
- `GET /blogposts`
- `GET /blogposts/:id`
- `GET /blogposts/:id?_embed=comments`
- `GET /comments?blogpostId=:id`
- `GET /gallery`
- `GET /testimonials`

Core write endpoints:

- `POST /comments`
- `POST /contact_messages`
- `POST /newsletters`
- `POST /reservations`
- `DELETE /comments/:id`
- `DELETE /reservations/:id`

System endpoint:

- `GET /health`

Events are read-only. `POST`, `PUT`, `PATCH` and `DELETE` requests to
`/events` or `/events/:id` return `405 Method Not Allowed`.

Event objects include both overview fields and detail-page fields:

```json
{
  "id": 1,
  "slug": "neon-nights-grand-opening",
  "title": "Neon Nights Grand Opening",
  "excerpt": "Short text for event cards.",
  "description": "Short intro text.",
  "content": "Long body text for the event detail page.",
  "date": "2026-05-09T21:00:00+02:00",
  "doorsOpen": "2026-05-09T20:00:00+02:00",
  "asset": {
    "url": "/file-bucket/event-thumb1.jpg"
  },
  "heroAsset": {
    "url": "/file-bucket/event-hero1.jpg"
  },
  "location": "Center Stage",
  "category": "House",
  "lineup": ["Mika Vale", "Nora Lumen"],
  "schedule": [
    {
      "time": "21:00",
      "label": "Doors and welcome drinks"
    }
  ],
  "price": "150 DKK",
  "ageLimit": "18+",
  "isFeatured": true
}
```

Event objects do not include a reservation URL. The frontend should build that
route from the event id, for example `/reservations?eventId=1`, and the booking
form should still submit to `POST /reservations`. For event-based reservations,
use the selected event as the source of available event dates, prefill the
reservation date from `doorsOpen` or `date`, and include `eventId` in the
reservation payload:

`asset.url` points to a `570x403` event thumbnail for cards. `heroAsset.url`
points to a `1170x500` hero image for event detail pages.
Event and reservation date-time values use ISO 8601 with an explicit Danish
local offset, for example `+02:00` during Danish summer time.

```json
{
  "name": "Robert Downey Jr",
  "email": "downey@mail.dk",
  "table": "5",
  "guests": "4",
  "date": "2026-05-09T20:00:00+02:00",
  "phone": "2342 78986",
  "eventId": 1
}
```

## Validation And Errors

The server now validates write requests for these collections:

- `blogposts`
- `comments`
- `gallery`
- `testimonials`
- `contact_messages`
- `reservations`
- `newsletters`

Validation errors return a consistent JSON structure:

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Request validation failed.",
    "details": [
      {
        "field": "email",
        "message": "email must be a valid email address.",
        "code": "invalid"
      }
    ]
  }
}
```

Newsletter signups also reject duplicate email addresses with HTTP `409 Conflict`.
Reservation requests also reject unknown table numbers, guest counts above the
selected table's capacity, and duplicate reservations for the same table on the
same calendar date. If a reservation includes `eventId`, the event must exist
and the reservation `date` must be on the same calendar date as that event.

Common status codes:

- `200 OK` for successful reads and health checks
- `201 Created` for successful `POST` requests
- `400 Bad Request` with `VALIDATION_ERROR` for invalid payloads
- `404 Not Found` with `NOT_FOUND` for unknown routes
- `405 Method Not Allowed` with `METHOD_NOT_ALLOWED` for event write requests
- `409 Conflict` with `RESOURCE_CONFLICT` for duplicate newsletter signups and reservation conflicts
- `500 Internal Server Error` with `INTERNAL_SERVER_ERROR` for unexpected server failures

## Documentation

Docs are located at [http://localhost:4000](http://localhost:4000).

**Note:** Authentication has been removed from this API. You can access all endpoints without an access token.

Read about `json-server` features like pagination, embedding and filtering at [npmjs.com/package/json-server](https://www.npmjs.com/package/json-server/v/0.17.4).
