"use client";

import { useEffect, useState } from "react";

const configs = {
  courses: {
    label: "Courses",
    fields: [
      ["title", "Title"],
      ["slug", "Slug"],
      ["description", "Description"],
      ["price", "Price"],
      ["published", "Published"],
    ],
  },
  projects: {
    label: "Projects",
    fields: [
      ["title", "Title"],
      ["slug", "Slug"],
      ["description", "Description"],
      ["status", "Status"],
    ],
  },
  events: {
    label: "Events",
    fields: [
      ["title", "Title"],
      ["event_date", "Date"],
      ["venue", "Location"],
      ["description", "Description"],
      ["published", "Published"],
    ],
  },
  media: {
    label: "Media",
    fields: [
      ["title", "Title"],
      ["storage_path", "Storage path"],
      ["alt_text", "Alt text"],
    ],
  },
  blog: {
    label: "Blog",
    fields: [
      ["title", "Title"],
      ["slug", "Slug"],
      ["excerpt", "Excerpt"],
      ["content", "Content"],
      ["published", "Published"],
    ],
  },
  admissions: {
    label: "Admissions",
    fields: [
      ["name", "Name"],
      ["email", "Email"],
      ["phone", "Phone"],
      ["program", "Program"],
      ["message", "Message"],
      ["status", "Status"],
    ],
  },
  contact: {
    label: "Contact Enquiries",
    fields: [
      ["name", "Name"],
      ["email", "Email"],
      ["phone", "Phone"],
      ["message", "Message"],
      ["status", "Status"],
    ],
  },
} as const;

type Resource = keyof typeof configs;

type FormData = Record<string, string | boolean>;

type AdminItem = {
  id: string;
  title?: string;
  name?: string;
  status?: string;
  published?: boolean;
  created_at?: string;
  [key: string]: unknown;
};

type Field = readonly [string, string];

export default function AdminCrud({
  resource,
}: {
  resource: Resource;
}) {
  const config = configs[resource];

  const [items, setItems] = useState<AdminItem[]>([]);
  const [form, setForm] = useState<FormData>({});
  const [editing, setEditing] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const endpoint = `/api/admin/content/${String(resource)}`;

  async function load() {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(endpoint);
      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Unable to load records");
        setItems([]);
      } else {
        setItems(data.items || []);
      }
    } catch {
      setError("Unable to connect to the admin content service.");
      setItems([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void load();
  }, [resource]);

  const fields = config.fields;

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    const method = editing ? "PATCH" : "POST";

    const body = {
      ...form,
      ...(editing ? { id: editing } : {}),
    };

    try {
      const response = await fetch(endpoint, {
        method,
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Save failed");
        return;
      }

      setForm({});
      setEditing(null);

      await load();
    } catch {
      setError("Unable to save the record.");
    }
  };

  const remove = async (id: string) => {
    if (!confirm("Delete this record?")) {
      return;
    }

    setError("");

    try {
      const response = await fetch(endpoint, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Delete failed");
        return;
      }

      await load();
    } catch {
      setError("Unable to delete the record.");
    }
  };

  const startEdit = (item: AdminItem) => {
    setEditing(item.id);

    const next: FormData = {};

    fields.forEach(([key]) => {
      const value = item[key];

      if (typeof value === "boolean") {
        next[key] = value;
      } else if (value === null || value === undefined) {
        next[key] = "";
      } else {
        next[key] = String(value);
      }
    });

    setForm(next);
  };

  const isReadOnlyResource =
    resource === "admissions" || resource === "contact";

  const updateField = (key: string, value: string | boolean) => {
    setForm((current) => ({
      ...current,
      [key]: value,
    }));
  };

  return (
    <div>
      <div className="admin-module-head">
        <div>
          <span className="eyebrow dark-eyebrow">CONTENT MANAGEMENT</span>

          <h1 className="section-title dark">{config.label}</h1>
        </div>

        {!isReadOnlyResource && (
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => {
              setEditing(null);
              setForm({});
              setError("");
            }}
          >
            New record +
          </button>
        )}
      </div>

      {error && (
        <div
          className="card"
          style={{
            marginBottom: 18,
            borderColor: "#f5b5b5",
            color: "#b42318",
          }}
        >
          {error}
        </div>
      )}

      {!isReadOnlyResource && (
        <form
          className="card form"
          onSubmit={submit}
          style={{ marginBottom: 18 }}
        >
          {fields.map(([key, label]: Field) => {
            if (key === "published") {
              return (
                <label
                  key={key}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <input
                    type="checkbox"
                    checked={Boolean(form[key])}
                    onChange={(event) =>
                      updateField(key, event.target.checked)
                    }
                  />

                  {label}
                </label>
              );
            }

            const isLongText =
              key === "description" ||
              key === "content" ||
              key === "message" ||
              key === "excerpt";

            return (
              <label
                key={key}
                style={{
                  display: "grid",
                  gap: 6,
                  fontSize: ".78rem",
                  fontWeight: 700,
                }}
              >
                {label}

                {isLongText ? (
                  <textarea
                    value={String(form[key] ?? "")}
                    onChange={(event) =>
                      updateField(key, event.target.value)
                    }
                  />
                ) : (
                  <input
                    value={String(form[key] ?? "")}
                    onChange={(event) =>
                      updateField(key, event.target.value)
                    }
                  />
                )}
              </label>
            );
          })}

          <div style={{ display: "flex", gap: 10 }}>
            <button type="submit" className="btn btn-primary">
              {editing ? "Update" : "Create"} record
            </button>

            {editing && (
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => {
                  setEditing(null);
                  setForm({});
                  setError("");
                }}
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      )}

      <div className="card table-wrap">
        {loading ? (
          <p className="muted">Loading records…</p>
        ) : items.length === 0 ? (
          <p className="muted">
            No records found. Connect the production database and publish
            approved content.
          </p>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>Record</th>
                <th>Status</th>
                <th>Created</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td>
                    <strong>
                      {item.title || item.name || "Untitled"}
                    </strong>
                  </td>

                  <td>
                    {String(
                      item.status ??
                        (item.published ? "Published" : "Draft"),
                    )}
                  </td>

                  <td>
                    {item.created_at
                      ? new Date(item.created_at).toLocaleDateString()
                      : "—"}
                  </td>

                  <td>
                    <div style={{ display: "flex", gap: 8 }}>
                      {!isReadOnlyResource && (
                        <>
                          <button
                            type="button"
                            className="btn btn-outline"
                            onClick={() => startEdit(item)}
                          >
                            Edit
                          </button>

                          <button
                            type="button"
                            className="btn btn-outline"
                            onClick={() => void remove(item.id)}
                          >
                            Delete
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}