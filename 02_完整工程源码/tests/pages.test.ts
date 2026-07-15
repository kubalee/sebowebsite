import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { V6Site } from "../src/V6Site";

describe("SEBO Vue pages", () => {
  it("renders the Chinese home page", () => {
    const wrapper = mount(V6Site, { props: { route: "/" } });
    expect(wrapper.text()).toContain("让电像空气一样自由");
    expect(wrapper.find("header").exists()).toBe(true);
    expect(wrapper.find("footer").exists()).toBe(true);
  });

  it("renders English content from an English route", () => {
    const wrapper = mount(V6Site, { props: { route: "/en/technology" } });
    expect(wrapper.text()).toContain("From Core Technology to Deliverable Products");
  });

  it("renders a product detail and a real contact link", () => {
    const wrapper = mount(V6Site, {
      props: { route: "/technology/thunderbird/tb-007-13ah" },
    });
    expect(wrapper.text()).toContain("TB-007-13Ah");
    expect(wrapper.find('a[href="/contact/product-selection"]').exists()).toBe(true);
  });

  it("renders a 404 for an unknown route", () => {
    const wrapper = mount(V6Site, { props: { route: "/not-a-real-route" } });
    expect(wrapper.text()).toContain("404");
  });
});
