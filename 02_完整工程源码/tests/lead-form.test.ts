import { describe, expect, it, vi } from "vitest";
import { buildLeadPayload, submitLead } from "../src/composables/useLeadForm";

describe("lead form", () => {
  it("builds the complete Worker payload", () => {
    const form = document.createElement("form");
    form.innerHTML = `
      <input name="name" value="李雷">
      <input name="company" value="SEBO">
      <input name="phone" value="13800000000">
      <input name="email" value="li@example.com">
      <input name="interest" value="移动能源">
      <textarea name="message">项目咨询</textarea>
      <input name="consent" type="checkbox" checked>
      <input name="marketing" type="checkbox">
      <input name="website" value="">
    `;

    expect(
      buildLeadPayload(new FormData(form), {
        contactType: "项目咨询",
        locale: "zh",
        source: "/contact/project",
      }),
    ).toEqual({
      name: "李雷",
      company: "SEBO",
      phone: "13800000000",
      email: "li@example.com",
      interest: "移动能源",
      contactType: "项目咨询",
      message: "项目咨询",
      locale: "zh",
      mode: "contact",
      source: "/contact/project",
      consent: true,
      marketing: false,
      website: "",
    });
  });

  it("returns the reference from a successful Worker response", async () => {
    const fetcher = vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ id: "SEBO-20260715-ABC123" }), {
        status: 201,
      }),
    );

    await expect(submitLead({} as never, fetcher)).resolves.toBe(
      "SEBO-20260715-ABC123",
    );
  });

  it("throws the Worker error without mutating form data", async () => {
    const fetcher = vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ error: "rate_limited" }), { status: 429 }),
    );

    await expect(submitLead({} as never, fetcher)).rejects.toThrow(
      "rate_limited",
    );
  });
});
