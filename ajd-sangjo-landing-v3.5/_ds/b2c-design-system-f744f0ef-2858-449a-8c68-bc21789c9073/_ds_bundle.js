/* @ds-bundle: {"format":4,"namespace":"B2CDesignSystem_f744f0","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"FAB","sourcePath":"components/actions/FAB.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"Banner","sourcePath":"components/feedback/Banner.jsx"},{"name":"InlineMessage","sourcePath":"components/feedback/InlineMessage.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Chip","sourcePath":"components/forms/Chip.jsx"},{"name":"Dropdown","sourcePath":"components/forms/Dropdown.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"SearchField","sourcePath":"components/forms/SearchField.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Toggle","sourcePath":"components/forms/Toggle.jsx"},{"name":"Icon","sourcePath":"components/icon/Icon.jsx"},{"name":"BottomButtonGroup","sourcePath":"components/navigation/BottomButtonGroup.jsx"},{"name":"Header","sourcePath":"components/navigation/Header.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"Modal","sourcePath":"components/surfaces/Modal.jsx"},{"name":"Table","sourcePath":"components/surfaces/Table.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"effa21c9972c","components/actions/FAB.jsx":"5a4b9b900b0e","components/actions/IconButton.jsx":"df2263ddbf27","components/feedback/Badge.jsx":"d740c9588fb3","components/feedback/Banner.jsx":"c3d43a95409f","components/feedback/InlineMessage.jsx":"cb9df22990b2","components/feedback/Toast.jsx":"2c0a89afea59","components/feedback/Tooltip.jsx":"4daf794dd0b9","components/forms/Checkbox.jsx":"a85d95adc6bc","components/forms/Chip.jsx":"007e84677081","components/forms/Dropdown.jsx":"53290643aef8","components/forms/Input.jsx":"242a2b2371cc","components/forms/Radio.jsx":"4c2af19f9019","components/forms/SearchField.jsx":"2f6d9076dc21","components/forms/Textarea.jsx":"9453dbed3a4b","components/forms/Toggle.jsx":"34f2ab94bac4","components/icon/Icon.jsx":"8a6c6bf2b060","components/navigation/BottomButtonGroup.jsx":"85ddbb072dc1","components/navigation/Header.jsx":"08d9b10ed75d","components/surfaces/Card.jsx":"d7b79dc5bf5a","components/surfaces/Modal.jsx":"fcf6804708b6","components/surfaces/Table.jsx":"09c97aa82ca8","ui_kits/landing/section-apply.jsx":"192d360a580d","ui_kits/landing/section-faq.jsx":"03c328ec4621","ui_kits/landing/section-features.jsx":"a7529aa2160f","ui_kits/landing/section-footer.jsx":"3cf2bdb3c2b4","ui_kits/landing/section-hero.jsx":"986985c25d5b","ui_kits/landing/section-plans.jsx":"c53405cfd472"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.B2CDesignSystem_f744f0 = window.B2CDesignSystem_f744f0 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/feedback/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONE = {
  neutral: {
    fill: "var(--Color-Bg-System-Neutral)",
    light: "var(--Color-Bg-Surface-Strong)",
    fg: "var(--Color-Fg-System-Neutral)",
    bd: "var(--Color-Border-System-Neutral)",
    icon: "info"
  },
  critical: {
    fill: "var(--Color-Bg-System-Critical)",
    light: "var(--Color-Bg-System-Critical_light)",
    fg: "var(--Color-Fg-System-Critical)",
    bd: "var(--Color-Border-System-Critical)",
    icon: "circle-alert"
  },
  notice: {
    fill: "var(--Color-Bg-System-Notice)",
    light: "var(--Color-Bg-System-Notice_light)",
    fg: "var(--Color-Fg-System-Notice)",
    bd: "var(--Color-Border-System-Notice)",
    icon: "triangle-alert"
  },
  success: {
    fill: "var(--Color-Bg-System-Success)",
    light: "var(--Color-Bg-System-Success_light)",
    fg: "var(--Color-Fg-System-Success)",
    bd: "var(--Color-Border-System-Success)",
    icon: "circle-check"
  },
  etc: {
    fill: "var(--Color-Bg-System-Etc)",
    light: "var(--Color-Bg-System-Etc_light)",
    fg: "var(--Color-Fg-System-Etc)",
    bd: "var(--Color-Border-System-Etc)",
    icon: "info"
  },
  promotion: {
    fill: "var(--Color-Bg-System-Promotion)",
    light: "var(--Color-Bg-System-Promotion_light)",
    fg: "var(--Color-Fg-System-Promotion)",
    bd: "var(--Color-Border-System-Promotion)",
    icon: "gift"
  }
};
function Badge({
  children,
  tone = "neutral",
  appearance = "light",
  size = "M",
  style,
  ...rest
}) {
  const t = TONE[tone] || TONE.neutral;
  const fill = appearance === "fill";
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      height: size === "S" ? 20 : 24,
      padding: size === "S" ? "0 6px" : "0 8px",
      background: fill ? t.fill : appearance === "outline" ? "var(--Color-GrayScale-Transparent)" : t.light,
      border: appearance === "outline" ? `1px solid ${t.bd}` : "1px solid transparent",
      borderRadius: "var(--Radius-Primitive-X1_5)",
      color: fill ? "var(--Color-Fg-On_color)" : t.fg,
      font: `var(--Font-Weight-Medium) ${size === "S" ? 11 : 12}px/1 var(--Font-Family-Base)`,
      whiteSpace: "nowrap",
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tooltip({
  children,
  label,
  description,
  placement = "top",
  open,
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const show = open !== undefined ? open : h;
  const pos = placement === "bottom" ? {
    top: "calc(100% + 8px)"
  } : placement === "left" ? {
    right: "calc(100% + 8px)",
    top: "50%",
    transform: "translateY(-50%)"
  } : placement === "right" ? {
    left: "calc(100% + 8px)",
    top: "50%",
    transform: "translateY(-50%)"
  } : {
    bottom: "calc(100% + 8px)"
  };
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    }
  }), children, show ? /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      zIndex: 30,
      ...pos,
      maxWidth: 260,
      width: "max-content",
      padding: "10px 12px",
      background: "var(--Color-Bg-Surface-Inverse)",
      borderRadius: "var(--Radius-Primitive-X2)",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      boxShadow: "0 6px 20px rgba(0,0,0,.18)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--Font-Weight-Medium) 13px/1.4 var(--Font-Family-Base)",
      color: "var(--Color-Fg-Inverse-Primary)"
    }
  }, label), description ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--Type-Caption)",
      color: "var(--Color-Fg-Inverse-Secondary)"
    }
  }, description) : null) : null);
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  checked = false,
  disabled = false,
  label,
  description,
  name,
  value,
  onChange,
  style,
  ...rest
}) {
  const bd = disabled ? "var(--Color-Fg-Controls-Disabled)" : checked ? "var(--Color-Fg-Controls-Selected)" : "var(--Color-Fg-Controls-Default)";
  return /*#__PURE__*/React.createElement("label", _extends({}, rest, {
    style: {
      display: "inline-flex",
      alignItems: "flex-start",
      gap: "var(--Spacing-Primitive-X2)",
      cursor: disabled ? "not-allowed" : "pointer",
      ...style
    }
  }), /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 20,
      height: 20,
      flex: "0 0 auto",
      marginTop: 1,
      border: `${checked ? 6 : 1}px solid ${disabled && checked ? "var(--Color-Fg-Controls-Selected_disable)" : bd}`,
      borderRadius: "var(--Radius-Primitive-Full)",
      background: disabled && !checked ? "var(--Color-Bg-Surface-Disabled)" : "var(--Color-Bg-Surface-Plain)",
      transition: "border .12s ease"
    }
  }), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--Font-Weight-Regular) 14px/1.4 var(--Font-Family-Base)",
      color: disabled ? "var(--Color-Fg-Disabled)" : "var(--Color-Fg-Primary)"
    }
  }, label), description ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--Type-Caption)",
      color: "var(--Color-Fg-Tertiary)"
    }
  }, description) : null) : null);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
  rows = 4,
  value,
  defaultValue,
  placeholder,
  label,
  status = "default",
  message,
  maxLength,
  disabled = false,
  onChange,
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false),
    [focus, setFocus] = React.useState(false);
  const err = status === "error";
  const border = disabled ? "var(--Color-Border-Disabled)" : err ? "var(--Color-Border-System-Critical)" : focus ? "var(--Color-Border-Brand-Default)" : h ? "var(--Color-Border-Neutral-Hover)" : "var(--Color-Border-Neutral-Default)";
  const len = (value != null ? value : defaultValue || "").length;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--Spacing-Primitive-X1_5)",
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    style: {
      font: "var(--Font-Weight-Medium) 13px/1.4 var(--Font-Family-Base)",
      color: "var(--Color-Fg-Secondary)"
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      padding: "12px 14px",
      background: disabled ? "var(--Color-Bg-Surface-Disabled)" : "var(--Color-Bg-Surface-Plain)",
      border: `1px solid ${border}`,
      borderRadius: "var(--Radius-Input-Textarea)",
      boxShadow: focus ? err ? "0 0 0 3px var(--Color-Border-System-Critical_light)" : "0 0 0 3px var(--Color-Border-Brand_light)" : "none",
      transition: "border-color .12s ease, box-shadow .12s ease"
    }
  }, /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    value: value,
    defaultValue: defaultValue,
    placeholder: placeholder,
    disabled: disabled,
    maxLength: maxLength,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest, {
    style: {
      width: "100%",
      border: "none",
      outline: "none",
      resize: "none",
      background: "transparent",
      padding: 0,
      display: "block",
      font: "var(--Font-Weight-Regular) 14px/1.6 var(--Font-Family-Base)",
      color: disabled ? "var(--Color-Fg-Disabled)" : "var(--Color-Fg-Primary)"
    }
  })), maxLength ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right",
      font: "var(--Type-Caption)",
      color: "var(--Color-Fg-Tertiary)"
    }
  }, len, "/", maxLength) : null), message ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--Type-Caption)",
      color: err ? "var(--Color-Fg-System-Critical)" : "var(--Color-Fg-Tertiary)"
    }
  }, message) : null);
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/forms/Toggle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Toggle({
  checked = false,
  disabled = false,
  label,
  size = "M",
  onChange,
  style,
  ...rest
}) {
  const w = size === "S" ? 36 : 44,
    h = size === "S" ? 20 : 24,
    k = h - 4;
  const bg = disabled ? checked ? "var(--Color-Bg-Brand-Disabled)" : "var(--Color-Bg-Surface-Disabled)" : checked ? "var(--Color-Bg-Brand-Default)" : "var(--Color-Bg-Neutral-Pressed)";
  return /*#__PURE__*/React.createElement("label", _extends({}, rest, {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--Spacing-Primitive-X2)",
      cursor: disabled ? "not-allowed" : "pointer",
      ...style
    }
  }), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    role: "switch",
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: w,
      height: h,
      flex: "0 0 auto",
      background: bg,
      borderRadius: "var(--Radius-Primitive-Full)",
      transition: "background-color .16s ease"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 2,
      left: checked ? w - k - 2 : 2,
      width: k,
      height: k,
      background: "var(--Color-GrayScale-White)",
      borderRadius: "var(--Radius-Primitive-Full)",
      boxShadow: "0 1px 3px rgba(0,0,0,.2)",
      transition: "left .16s ease"
    }
  })), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--Font-Weight-Regular) 14px/1.4 var(--Font-Family-Base)",
      color: disabled ? "var(--Color-Fg-Disabled)" : "var(--Color-Fg-Primary)"
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Toggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Toggle.jsx", error: String((e && e.message) || e) }); }

// components/icon/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BASE = "https://cdn.jsdelivr.net/npm/lucide-static@0.460.0/icons/";
function Icon({
  name = "circle",
  size = 20,
  color = "currentColor",
  style,
  ...rest
}) {
  const url = `url("${BASE}${name}.svg")`;
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true"
  }, rest, {
    style: {
      display: "inline-block",
      flex: "0 0 auto",
      width: size,
      height: size,
      backgroundColor: color,
      WebkitMaskImage: url,
      maskImage: url,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icon/Icon.jsx", error: String((e && e.message) || e) }); }

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const H = {
  XS: 28,
  S: 32,
  M: 40,
  L: 48,
  XL: 56
};
const FS = {
  XS: 12,
  S: 13,
  M: 14,
  L: 16,
  XL: 18
};
const PX = {
  XS: 10,
  S: 12,
  M: 16,
  L: 20,
  XL: 24
};
const IS = {
  XS: 14,
  S: 16,
  M: 18,
  L: 20,
  XL: 22
};
const RAD = {
  XS: "var(--Radius-Button-XS)",
  S: "var(--Radius-Button-S)",
  M: "var(--Radius-Button-M)",
  L: "var(--Radius-Button-L)",
  XL: "var(--Radius-Button-XL)"
};
const V = {
  brand: {
    bg: "Brand",
    fg: "var(--Color-Fg-On_color)",
    fgDis: "var(--Color-Fg-On_color)",
    bd: null
  },
  brand_subtle: {
    bg: "Brand_subtle",
    fg: "var(--Color-Fg-Brand-Default)",
    fgDis: "var(--Color-Fg-Brand-Disabled)",
    bd: null
  },
  neutral: {
    bg: "Neutral",
    fg: "var(--Color-Fg-Primary)",
    fgDis: "var(--Color-Fg-Disabled)",
    bd: null
  },
  neutral_subtle: {
    bg: "Neutral_subtle",
    fg: "var(--Color-Fg-Neutral-Default)",
    fgDis: "var(--Color-Fg-Neutral-Disabled)",
    bd: null
  },
  outline: {
    bg: "Neutral_subtle",
    fg: "var(--Color-Fg-Primary)",
    fgDis: "var(--Color-Fg-Disabled)",
    bd: {
      d: "var(--Color-Border-Neutral-Default)",
      h: "var(--Color-Border-Neutral-Hover)",
      p: "var(--Color-Border-Neutral-Pressed)",
      dis: "var(--Color-Border-Neutral-Disabled)"
    }
  },
  danger: {
    bg: "Danger",
    fg: "var(--Color-Fg-On_color)",
    fgDis: "var(--Color-Fg-On_color)",
    bd: null
  },
  danger_subtle: {
    bg: "Danger_subtle",
    fg: "var(--Color-Fg-Danger-Default)",
    fgDis: "var(--Color-Fg-Danger-Disabled)",
    bd: null
  }
};
function Button({
  variant = "brand",
  size = "M",
  children,
  leadingIcon,
  trailingIcon,
  fullWidth = false,
  disabled = false,
  round = false,
  style,
  onClick,
  ...rest
}) {
  const [h, setH] = React.useState(false),
    [p, setP] = React.useState(false);
  const v = V[variant] || V.brand;
  const state = disabled ? "Disabled" : p ? "Pressed" : h ? "Hover" : "Default";
  const bg = `var(--Color-Bg-${v.bg}-${state})`;
  const bd = v.bd ? disabled ? v.bd.dis : p ? v.bd.p : h ? v.bd.h : v.bd.d : null;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => {
      setH(false);
      setP(false);
    },
    onMouseDown: () => setP(true),
    onMouseUp: () => setP(false)
  }, rest, {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: size === "XS" || size === "S" ? "var(--Spacing-Primitive-X1)" : "var(--Spacing-Primitive-X1_5)",
      height: H[size],
      padding: `0 ${PX[size]}px`,
      width: fullWidth ? "100%" : undefined,
      font: `${size === "XS" || size === "S" ? "var(--Font-Weight-Medium)" : "var(--Font-Weight-SemiBold)"} ${FS[size]}px/1 var(--Font-Family-Base)`,
      color: disabled ? v.fgDis : v.fg,
      background: bg,
      border: bd ? `1px solid ${bd}` : "1px solid transparent",
      borderRadius: round ? "var(--Radius-Button-Round)" : RAD[size],
      opacity: disabled && (variant === "brand" || variant === "danger") ? 1 : 1,
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "background-color .12s ease, border-color .12s ease, color .12s ease",
      whiteSpace: "nowrap",
      ...style
    }
  }), leadingIcon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: leadingIcon,
    size: IS[size]
  }) : null, children, trailingIcon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: trailingIcon,
    size: IS[size]
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/FAB.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function FAB({
  icon = "arrow-up",
  label,
  extendedLabel,
  disabled = false,
  style,
  onClick,
  ...rest
}) {
  const [h, setH] = React.useState(false),
    [p, setP] = React.useState(false);
  const state = disabled ? "Disabled" : p ? "Pressed" : h ? "Hover" : "Default";
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => {
      setH(false);
      setP(false);
    },
    onMouseDown: () => setP(true),
    onMouseUp: () => setP(false)
  }, rest, {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "var(--Spacing-Primitive-X2)",
      height: 56,
      width: extendedLabel ? undefined : 56,
      padding: extendedLabel ? "0 20px" : 0,
      background: `var(--Color-Bg-Brand-${state})`,
      color: "var(--Color-Fg-On_color)",
      border: "none",
      borderRadius: "var(--Radius-Button-Round)",
      boxShadow: "0 4px 12px rgba(0,0,0,.15)",
      font: "var(--Font-Weight-SemiBold) 15px/1 var(--Font-Family-Base)",
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "background-color .12s ease",
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 24
  }), extendedLabel);
}
Object.assign(__ds_scope, { FAB });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/FAB.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const H = {
  XS: 28,
  S: 32,
  M: 40,
  L: 48,
  XL: 56
};
const IS = {
  XS: 16,
  S: 18,
  M: 20,
  L: 22,
  XL: 24
};
const RAD = {
  XS: "var(--Radius-Button-XS)",
  S: "var(--Radius-Button-S)",
  M: "var(--Radius-Button-M)",
  L: "var(--Radius-Button-L)",
  XL: "var(--Radius-Button-XL)"
};
const V = {
  neutral_subtle: {
    bg: "Neutral_subtle",
    fg: ["var(--Color-Fg-Neutral-Default)", "var(--Color-Fg-Neutral-Hover)", "var(--Color-Fg-Neutral-Pressed)", "var(--Color-Fg-Neutral-Disabled_icon)"]
  },
  neutral: {
    bg: "Neutral",
    fg: ["var(--Color-Fg-Neutral-Default)", "var(--Color-Fg-Neutral-Hover)", "var(--Color-Fg-Neutral-Pressed)", "var(--Color-Fg-Neutral-Disabled_icon)"]
  },
  brand: {
    bg: "Brand",
    fg: ["var(--Color-Fg-On_color)", "var(--Color-Fg-On_color)", "var(--Color-Fg-On_color)", "var(--Color-Fg-On_color)"]
  },
  overlay: {
    bg: "Overlay",
    fg: ["var(--Color-Fg-On_color)", "var(--Color-Fg-On_color)", "var(--Color-Fg-On_color)", "var(--Color-Fg-On_color)"]
  }
};
function IconButton({
  icon = "x",
  variant = "neutral_subtle",
  size = "M",
  shape = "square",
  disabled = false,
  label,
  style,
  onClick,
  ...rest
}) {
  const [h, setH] = React.useState(false),
    [p, setP] = React.useState(false);
  const v = V[variant] || V.neutral_subtle;
  const i = disabled ? 3 : p ? 2 : h ? 1 : 0;
  const state = ["Default", "Hover", "Pressed", "Disabled"][i];
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => {
      setH(false);
      setP(false);
    },
    onMouseDown: () => setP(true),
    onMouseUp: () => setP(false)
  }, rest, {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: H[size],
      height: H[size],
      padding: 0,
      border: "1px solid transparent",
      background: `var(--Color-Bg-${v.bg}-${state})`,
      borderRadius: shape === "round" ? "var(--Radius-Button-Round)" : RAD[size],
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "background-color .12s ease",
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: IS[size],
    color: v.fg[i]
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Banner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONE = {
  neutral: {
    fill: "var(--Color-Bg-System-Neutral)",
    light: "var(--Color-Bg-Surface-Strong)",
    fg: "var(--Color-Fg-System-Neutral)",
    bd: "var(--Color-Border-System-Neutral)",
    icon: "info"
  },
  critical: {
    fill: "var(--Color-Bg-System-Critical)",
    light: "var(--Color-Bg-System-Critical_light)",
    fg: "var(--Color-Fg-System-Critical)",
    bd: "var(--Color-Border-System-Critical)",
    icon: "circle-alert"
  },
  notice: {
    fill: "var(--Color-Bg-System-Notice)",
    light: "var(--Color-Bg-System-Notice_light)",
    fg: "var(--Color-Fg-System-Notice)",
    bd: "var(--Color-Border-System-Notice)",
    icon: "triangle-alert"
  },
  success: {
    fill: "var(--Color-Bg-System-Success)",
    light: "var(--Color-Bg-System-Success_light)",
    fg: "var(--Color-Fg-System-Success)",
    bd: "var(--Color-Border-System-Success)",
    icon: "circle-check"
  },
  etc: {
    fill: "var(--Color-Bg-System-Etc)",
    light: "var(--Color-Bg-System-Etc_light)",
    fg: "var(--Color-Fg-System-Etc)",
    bd: "var(--Color-Border-System-Etc)",
    icon: "info"
  },
  promotion: {
    fill: "var(--Color-Bg-System-Promotion)",
    light: "var(--Color-Bg-System-Promotion_light)",
    fg: "var(--Color-Fg-System-Promotion)",
    bd: "var(--Color-Border-System-Promotion)",
    icon: "gift"
  }
};
function Banner({
  children,
  title,
  tone = "notice",
  action,
  onClose,
  style,
  ...rest
}) {
  const t = TONE[tone] || TONE.notice;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status"
  }, rest, {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: "var(--Spacing-Primitive-X3)",
      padding: "var(--Spacing-Primitive-X4)",
      background: t.light,
      borderRadius: "var(--Radius-Primitive-X3)",
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: 20,
    color: t.fg,
    style: {
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: "flex",
      flexDirection: "column",
      gap: "var(--Spacing-Primitive-X1)"
    }
  }, title ? /*#__PURE__*/React.createElement("strong", {
    style: {
      font: "var(--Font-Weight-SemiBold) 15px/1.4 var(--Font-Family-Base)",
      color: "var(--Color-Fg-Primary)"
    }
  }, title) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--Font-Weight-Regular) 14px/1.6 var(--Font-Family-Base)",
      color: "var(--Color-Fg-Secondary)"
    }
  }, children)), action, onClose ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    size: "XS",
    label: "\uB2EB\uAE30",
    onClick: onClose
  }) : null);
}
Object.assign(__ds_scope, { Banner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Banner.jsx", error: String((e && e.message) || e) }); }

// components/feedback/InlineMessage.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONE = {
  neutral: {
    fill: "var(--Color-Bg-System-Neutral)",
    light: "var(--Color-Bg-Surface-Strong)",
    fg: "var(--Color-Fg-System-Neutral)",
    bd: "var(--Color-Border-System-Neutral)",
    icon: "info"
  },
  critical: {
    fill: "var(--Color-Bg-System-Critical)",
    light: "var(--Color-Bg-System-Critical_light)",
    fg: "var(--Color-Fg-System-Critical)",
    bd: "var(--Color-Border-System-Critical)",
    icon: "circle-alert"
  },
  notice: {
    fill: "var(--Color-Bg-System-Notice)",
    light: "var(--Color-Bg-System-Notice_light)",
    fg: "var(--Color-Fg-System-Notice)",
    bd: "var(--Color-Border-System-Notice)",
    icon: "triangle-alert"
  },
  success: {
    fill: "var(--Color-Bg-System-Success)",
    light: "var(--Color-Bg-System-Success_light)",
    fg: "var(--Color-Fg-System-Success)",
    bd: "var(--Color-Border-System-Success)",
    icon: "circle-check"
  },
  etc: {
    fill: "var(--Color-Bg-System-Etc)",
    light: "var(--Color-Bg-System-Etc_light)",
    fg: "var(--Color-Fg-System-Etc)",
    bd: "var(--Color-Border-System-Etc)",
    icon: "info"
  },
  promotion: {
    fill: "var(--Color-Bg-System-Promotion)",
    light: "var(--Color-Bg-System-Promotion_light)",
    fg: "var(--Color-Fg-System-Promotion)",
    bd: "var(--Color-Border-System-Promotion)",
    icon: "gift"
  }
};
function InlineMessage({
  children,
  tone = "critical",
  icon,
  style,
  ...rest
}) {
  const t = TONE[tone] || TONE.critical;
  return /*#__PURE__*/React.createElement("p", _extends({}, rest, {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: "var(--Spacing-Primitive-X1_5)",
      margin: 0,
      font: "var(--Font-Weight-Regular) 13px/1.5 var(--Font-Family-Base)",
      color: t.fg,
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon || t.icon,
    size: 16,
    style: {
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { InlineMessage });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/InlineMessage.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Toast({
  children,
  icon,
  action,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status"
  }, rest, {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--Spacing-Primitive-X2)",
      padding: "14px 20px",
      background: "var(--Color-Bg-Surface-Inverse_translucent)",
      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)",
      borderRadius: "var(--Radius-Primitive-X3)",
      color: "var(--Color-Fg-Inverse-Primary)",
      font: "var(--Font-Weight-Regular) 14px/1.4 var(--Font-Family-Base)",
      boxShadow: "0 6px 20px rgba(0,0,0,.18)",
      ...style
    }
  }), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18
  }) : null, /*#__PURE__*/React.createElement("span", null, children), action ? /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "var(--Spacing-Primitive-X2)",
      font: "var(--Font-Weight-SemiBold) 14px/1.4 var(--Font-Family-Base)",
      color: "var(--Color-GrayScale-White)",
      cursor: "pointer"
    }
  }, action) : null);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  checked = false,
  indeterminate = false,
  disabled = false,
  label,
  description,
  size = "M",
  onChange,
  style,
  ...rest
}) {
  const s = size === "S" ? 18 : 20;
  const on = checked || indeterminate;
  const bg = disabled ? on ? "var(--Color-Bg-Brand-Disabled)" : "var(--Color-Bg-Surface-Disabled)" : on ? "var(--Color-Bg-Brand-Default)" : "var(--Color-Bg-Surface-Plain)";
  const bd = disabled ? "var(--Color-Border-Disabled)" : on ? "var(--Color-Border-Brand-Default)" : "var(--Color-Border-Neutral-Default)";
  return /*#__PURE__*/React.createElement("label", _extends({}, rest, {
    style: {
      display: "inline-flex",
      alignItems: "flex-start",
      gap: "var(--Spacing-Primitive-X2)",
      cursor: disabled ? "not-allowed" : "pointer",
      ...style
    }
  }), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: s,
      height: s,
      flex: "0 0 auto",
      marginTop: 1,
      background: bg,
      border: `1px solid ${bd}`,
      borderRadius: "var(--Radius-Primitive-X1_5)",
      transition: "background-color .12s ease, border-color .12s ease"
    }
  }, on ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: indeterminate ? "minus" : "check",
    size: s - 6,
    color: "var(--Color-Fg-On_color)"
  }) : null), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--Font-Weight-Regular) 14px/1.4 var(--Font-Family-Base)",
      color: disabled ? "var(--Color-Fg-Disabled)" : "var(--Color-Fg-Primary)"
    }
  }, label), description ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--Type-Caption)",
      color: "var(--Color-Fg-Tertiary)"
    }
  }, description) : null) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Chip({
  children,
  selected = false,
  disabled = false,
  size = "M",
  leadingIcon,
  onRemove,
  onClick,
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const H = size === "S" ? 28 : 32;
  const bg = disabled ? "var(--Color-Bg-Select-Disabled)" : selected ? "var(--Color-Bg-Select-Selected)" : h ? "var(--Color-Bg-Select-Hover)" : "var(--Color-Bg-Select-Default)";
  const bd = disabled ? "var(--Color-Border-Select-Disabled)" : selected ? "var(--Color-Border-Select-Selected)" : "var(--Color-Border-Select-Default)";
  const fg = disabled ? "var(--Color-Fg-Select-Disabled)" : selected ? "var(--Color-Fg-Select-Selected)" : "var(--Color-Fg-Select-Default)";
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    onClick: onClick,
    "aria-pressed": selected,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false)
  }, rest, {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--Spacing-Primitive-X1)",
      height: H,
      padding: "0 14px",
      background: bg,
      border: `1px solid ${bd}`,
      borderRadius: "var(--Radius-Primitive-Full)",
      color: fg,
      font: `var(--Font-Weight-${selected ? "Medium" : "Regular"}) ${size === "S" ? 13 : 14}px/1 var(--Font-Family-Base)`,
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "background-color .12s ease, border-color .12s ease, color .12s ease",
      ...style
    }
  }), leadingIcon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: leadingIcon,
    size: 16
  }) : null, children, onRemove ? /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onRemove();
    },
    style: {
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 14
  })) : null);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Chip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Dropdown.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const H = {
    S: 32,
    M: 40,
    L: 48
  },
  RAD = {
    S: "var(--Radius-Input-S)",
    M: "var(--Radius-Input-M)",
    L: "var(--Radius-Input-L)"
  },
  FS = {
    S: 13,
    M: 14,
    L: 15
  };
function Dropdown({
  options = [],
  value,
  placeholder = "선택",
  size = "M",
  label,
  disabled = false,
  onChange,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(false),
    [h, setH] = React.useState(false);
  const sel = options.find(o => (o.value !== undefined ? o.value : o) === value);
  const text = sel ? sel.label !== undefined ? sel.label : sel : null;
  const border = disabled ? "var(--Color-Border-Disabled)" : open ? "var(--Color-Border-Brand-Default)" : h ? "var(--Color-Border-Neutral-Hover)" : "var(--Color-Border-Neutral-Default)";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--Spacing-Primitive-X1_5)",
      position: "relative",
      ...style
    }
  }, rest), label ? /*#__PURE__*/React.createElement("label", {
    style: {
      font: "var(--Font-Weight-Medium) 13px/1.4 var(--Font-Family-Base)",
      color: "var(--Color-Fg-Secondary)"
    }
  }, label) : null, /*#__PURE__*/React.createElement("button", {
    type: "button",
    disabled: disabled,
    onClick: () => setOpen(o => !o),
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--Spacing-Primitive-X2)",
      width: "100%",
      height: H[size],
      padding: `0 ${size === "S" ? 10 : 14}px`,
      background: disabled ? "var(--Color-Bg-Surface-Disabled)" : "var(--Color-Bg-Surface-Plain)",
      border: `1px solid ${border}`,
      borderRadius: RAD[size],
      cursor: disabled ? "not-allowed" : "pointer",
      font: `var(--Font-Weight-Regular) ${FS[size]}px/1 var(--Font-Family-Base)`,
      color: disabled ? "var(--Color-Fg-Disabled)" : text ? "var(--Color-Fg-Primary)" : "var(--Color-Fg-Placeholder)",
      boxShadow: open ? "0 0 0 3px var(--Color-Border-Brand_light)" : "none",
      transition: "border-color .12s ease, box-shadow .12s ease"
    }
  }, text || placeholder, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: open ? "chevron-up" : "chevron-down",
    size: size === "S" ? 16 : 20,
    color: "var(--Color-Fg-Object-Strong)"
  })), open ? /*#__PURE__*/React.createElement("ul", {
    style: {
      position: "absolute",
      top: "100%",
      left: 0,
      right: 0,
      marginTop: 4,
      zIndex: 20,
      listStyle: "none",
      padding: "var(--Spacing-Primitive-X1)",
      background: "var(--Color-Bg-Surface-Plain)",
      border: "1px solid var(--Color-Border-Secondary)",
      borderRadius: RAD[size],
      boxShadow: "0 8px 20px rgba(0,0,0,.10)",
      maxHeight: 240,
      overflowY: "auto"
    }
  }, options.map((o, i) => {
    const ov = o.value !== undefined ? o.value : o,
      ol = o.label !== undefined ? o.label : o,
      on = ov === value;
    return /*#__PURE__*/React.createElement("li", {
      key: i
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => {
        onChange && onChange(ov);
        setOpen(false);
      },
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        padding: "10px 12px",
        border: "none",
        textAlign: "left",
        background: on ? "var(--Color-Bg-Select-Selected)" : "transparent",
        borderRadius: "var(--Radius-Primitive-X1_5)",
        cursor: "pointer",
        font: `var(--Font-Weight-${on ? "Medium" : "Regular"}) ${FS[size]}px/1.4 var(--Font-Family-Base)`,
        color: on ? "var(--Color-Fg-Select-Selected)" : "var(--Color-Fg-Select-Default)"
      }
    }, ol, on ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "check",
      size: 16
    }) : null));
  })) : null);
}
Object.assign(__ds_scope, { Dropdown });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Dropdown.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const H = {
  S: 32,
  M: 40,
  L: 48,
  XL: 68
};
const FS = {
  S: 13,
  M: 14,
  L: 15,
  XL: 16
};
const RAD = {
  S: "var(--Radius-Input-S)",
  M: "var(--Radius-Input-M)",
  L: "var(--Radius-Input-L)",
  XL: "var(--Radius-Input-XL)"
};
function Input({
  size = "M",
  value,
  defaultValue,
  placeholder,
  label,
  status = "default",
  message,
  leadingIcon,
  trailingIcon,
  disabled = false,
  readOnly = false,
  onChange,
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false),
    [focus, setFocus] = React.useState(false);
  const err = status === "error",
    ok = status === "success";
  const border = disabled ? "var(--Color-Border-Disabled)" : err ? "var(--Color-Border-System-Critical)" : ok ? "var(--Color-Border-System-Success)" : focus ? "var(--Color-Border-Brand-Default)" : h ? "var(--Color-Border-Neutral-Hover)" : "var(--Color-Border-Neutral-Default)";
  const ring = !focus ? "none" : err ? "0 0 0 3px var(--Color-Border-System-Critical_light)" : ok ? "0 0 0 3px var(--Color-Border-System-Success_light)" : "0 0 0 3px var(--Color-Border-Brand_light)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--Spacing-Primitive-X1_5)",
      ...style
    }
  }, label && size !== "XL" ? /*#__PURE__*/React.createElement("label", {
    style: {
      font: "var(--Font-Weight-Medium) 13px/1.4 var(--Font-Family-Base)",
      color: "var(--Color-Fg-Secondary)"
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--Spacing-Primitive-X2)",
      height: H[size],
      padding: `0 ${size === "S" ? 10 : 14}px`,
      background: disabled ? "var(--Color-Bg-Surface-Disabled)" : "var(--Color-Bg-Surface-Plain)",
      border: `1px solid ${border}`,
      borderRadius: RAD[size],
      boxShadow: ring,
      transition: "border-color .12s ease, box-shadow .12s ease"
    }
  }, leadingIcon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: leadingIcon,
    size: size === "S" ? 16 : 20,
    color: "var(--Color-Fg-Object-Default)"
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      flex: 1,
      minWidth: 0,
      gap: 2
    }
  }, label && size === "XL" ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--Font-Weight-Regular) 12px/1.2 var(--Font-Family-Base)",
      color: "var(--Color-Fg-Tertiary)"
    }
  }, label) : null, /*#__PURE__*/React.createElement("input", _extends({
    value: value,
    defaultValue: defaultValue,
    placeholder: placeholder,
    disabled: disabled,
    readOnly: readOnly,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest, {
    style: {
      width: "100%",
      border: "none",
      outline: "none",
      background: "transparent",
      padding: 0,
      font: `var(--Font-Weight-Regular) ${FS[size]}px/1.4 var(--Font-Family-Base)`,
      color: disabled ? "var(--Color-Fg-Disabled)" : "var(--Color-Fg-Primary)"
    }
  }))), trailingIcon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: trailingIcon,
    size: size === "S" ? 16 : 20,
    color: "var(--Color-Fg-Object-Default)"
  }) : null), message ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--Type-Caption)",
      color: err ? "var(--Color-Fg-System-Critical)" : ok ? "var(--Color-Fg-System-Success)" : "var(--Color-Fg-Tertiary)"
    }
  }, message) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/SearchField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const H = {
    S: 32,
    M: 40,
    L: 48
  },
  RAD = {
    S: "var(--Radius-Input-S)",
    M: "var(--Radius-Input-M)",
    L: "var(--Radius-Input-L)"
  };
function SearchField({
  size = "M",
  value,
  defaultValue,
  placeholder = "검색어를 입력하세요",
  round = false,
  disabled = false,
  onChange,
  onClear,
  onSubmit,
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false),
    [focus, setFocus] = React.useState(false);
  const border = disabled ? "var(--Color-Border-Disabled)" : focus ? "var(--Color-Border-Brand-Default)" : h ? "var(--Color-Border-Neutral-Hover)" : "var(--Color-Border-Neutral-Default)";
  const has = !!(value != null ? value : defaultValue);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--Spacing-Primitive-X2)",
      height: H[size],
      padding: "0 14px",
      background: disabled ? "var(--Color-Bg-Surface-Disabled)" : "var(--Color-Bg-Surface-Subtle)",
      border: `1px solid ${border}`,
      borderRadius: round ? "var(--Radius-Primitive-Full)" : RAD[size],
      boxShadow: focus ? "0 0 0 3px var(--Color-Border-Brand_light)" : "none",
      transition: "border-color .12s ease, box-shadow .12s ease",
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "search",
    size: size === "S" ? 16 : 20,
    color: "var(--Color-Fg-Object-Strong)"
  }), /*#__PURE__*/React.createElement("input", _extends({
    value: value,
    defaultValue: defaultValue,
    placeholder: placeholder,
    disabled: disabled,
    onChange: onChange,
    onKeyDown: e => {
      if (e.key === "Enter" && onSubmit) onSubmit(e.currentTarget.value);
    },
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest, {
    style: {
      flex: 1,
      minWidth: 0,
      border: "none",
      outline: "none",
      background: "transparent",
      padding: 0,
      font: "var(--Font-Weight-Regular) 14px/1.4 var(--Font-Family-Base)",
      color: "var(--Color-Fg-Primary)"
    }
  })), has && onClear ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "\uC9C0\uC6B0\uAE30",
    onClick: onClear,
    style: {
      border: "none",
      background: "transparent",
      padding: 0,
      display: "flex",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "circle-x",
    size: 18,
    color: "var(--Color-Fg-Object-Default)"
  })) : null);
}
Object.assign(__ds_scope, { SearchField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SearchField.jsx", error: String((e && e.message) || e) }); }

// components/navigation/BottomButtonGroup.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function BottomButtonGroup({
  children,
  fixed = false,
  gutter = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: "flex",
      gap: "var(--Spacing-X_Gap-UI_over28H)",
      padding: gutter ? "12px var(--Spacing-Global_gutter-Mobile) 20px" : "12px 0 20px",
      background: "var(--Color-Bg-Primary)",
      borderTop: "1px solid var(--Color-Border-Tertiary)",
      ...(fixed ? {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 20
      } : null),
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { BottomButtonGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/BottomButtonGroup.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Header.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Header({
  brand = "Brand",
  menu = [],
  activeIndex = 0,
  actions,
  banner,
  platform = "pc",
  onSelect,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({}, rest, {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 30,
      background: "var(--Color-Bg-Primary)",
      ...style
    }
  }), banner ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "var(--Spacing-Primitive-X2)",
      height: 40,
      background: "var(--Color-Bg-System-Promotion)",
      color: "var(--Color-Fg-On_color)",
      font: "var(--Font-Weight-Medium) 13px/1 var(--Font-Family-Base)"
    }
  }, banner) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--Spacing-Primitive-X8)",
      height: platform === "pc" ? 68 : 62,
      padding: `0 ${platform === "pc" ? "var(--Spacing-Global_gutter-PC)" : "var(--Spacing-Global_gutter-Mobile)"}`,
      borderBottom: "1px solid var(--Color-Border-Tertiary)"
    }
  }, platform === "mobile" ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "menu",
    size: "S",
    label: "\uBA54\uB274"
  }) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--Font-Weight-Bold) 20px/1 var(--Font-Family-Base)",
      color: "var(--Color-Fg-Primary)",
      letterSpacing: "-0.01em"
    }
  }, brand), platform === "pc" ? /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--Spacing-Primitive-X8)",
      flex: 1
    }
  }, menu.map((m, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    type: "button",
    onClick: () => onSelect && onSelect(i),
    style: {
      border: "none",
      background: "transparent",
      padding: 0,
      cursor: "pointer",
      font: `var(--Font-Weight-${i === activeIndex ? "SemiBold" : "Medium"}) 16px/1 var(--Font-Family-Base)`,
      color: i === activeIndex ? "var(--Color-Fg-Primary)" : "var(--Color-Fg-Secondary)"
    }
  }, m))) : /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--Spacing-X_Gap-UI_over28H)"
    }
  }, actions || /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "search",
    size: "S",
    label: "\uAC80\uC0C9"
  }), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "user",
    size: "S",
    label: "\uB0B4 \uC815\uBCF4"
  })))));
}
Object.assign(__ds_scope, { Header });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Header.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  children,
  title,
  description,
  media,
  footer,
  interactive = false,
  tone = "plain",
  padding = 24,
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const bg = tone === "subtle" ? "var(--Color-Bg-Surface-Subtle)" : "var(--Color-Bg-Surface-Plain)";
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: "flex",
      flexDirection: "column",
      background: bg,
      border: `1px solid ${interactive && h ? "var(--Color-Border-Neutral-Hover)" : "var(--Color-Border-Secondary)"}`,
      borderRadius: "var(--Radius-Primitive-X4)",
      overflow: "hidden",
      cursor: interactive ? "pointer" : "default",
      transition: "border-color .12s ease, box-shadow .12s ease",
      boxShadow: interactive && h ? "0 6px 20px rgba(0,0,0,.06)" : "none",
      ...style
    }
  }), media, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--Spacing-Primitive-X2)",
      padding
    }
  }, title ? /*#__PURE__*/React.createElement("strong", {
    style: {
      font: "var(--Font-Weight-SemiBold) 18px/1.4 var(--Font-Family-Base)",
      color: "var(--Color-Fg-Primary)"
    }
  }, title) : null, description ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--Font-Weight-Regular) 14px/1.6 var(--Font-Family-Base)",
      color: "var(--Color-Fg-Secondary)"
    }
  }, description) : null, children, footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--Spacing-Primitive-X2)"
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Modal.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Modal({
  open = true,
  title,
  description,
  children,
  footer,
  width = 440,
  onClose,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--Color-Bg-Dimmed)",
      padding: "var(--Spacing-Primitive-X5)",
      zIndex: 40
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true"
  }, rest, {
    onClick: e => e.stopPropagation(),
    style: {
      width: "100%",
      maxWidth: width,
      background: "var(--Color-Bg-Surface-Plain)",
      borderRadius: "var(--Radius-Primitive-X4)",
      boxShadow: "0 20px 48px rgba(0,0,0,.20)",
      overflow: "hidden",
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: "var(--Spacing-Primitive-X3)",
      padding: "24px 24px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: "var(--Spacing-Primitive-X2)"
    }
  }, title ? /*#__PURE__*/React.createElement("strong", {
    style: {
      font: "var(--Font-Weight-Bold) 20px/1.4 var(--Font-Family-Base)",
      color: "var(--Color-Fg-Primary)"
    }
  }, title) : null, description ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--Font-Weight-Regular) 14px/1.6 var(--Font-Family-Base)",
      color: "var(--Color-Fg-Secondary)"
    }
  }, description) : null), onClose ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    size: "S",
    label: "\uB2EB\uAE30",
    onClick: onClose
  }) : null), children ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 24px 0"
    }
  }, children) : null, footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--Spacing-Primitive-X2)",
      padding: 24
    }
  }, footer) : /*#__PURE__*/React.createElement("div", {
    style: {
      height: 24
    }
  })));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Modal.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Table.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Table({
  columns = [],
  rows = [],
  align,
  compact = false,
  style,
  ...rest
}) {
  const pad = compact ? "10px 12px" : "14px 16px";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px solid var(--Color-Border-Secondary)",
      borderRadius: "var(--Radius-Primitive-X3)",
      overflow: "hidden",
      ...style
    }
  }, /*#__PURE__*/React.createElement("table", _extends({}, rest, {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      font: "var(--Font-Weight-Regular) 14px/1.5 var(--Font-Family-Base)"
    }
  }), /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: "var(--Color-Bg-Surface-Subtle)"
    }
  }, columns.map((c, i) => /*#__PURE__*/React.createElement("th", {
    key: i,
    style: {
      padding: pad,
      textAlign: align && align[i] || "left",
      font: "var(--Font-Weight-SemiBold) 13px/1.4 var(--Font-Family-Base)",
      color: "var(--Color-Fg-Secondary)",
      borderBottom: "1px solid var(--Color-Border-Secondary)",
      whiteSpace: "nowrap"
    }
  }, c)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, ri) => /*#__PURE__*/React.createElement("tr", {
    key: ri
  }, r.map((cell, ci) => /*#__PURE__*/React.createElement("td", {
    key: ci,
    style: {
      padding: pad,
      textAlign: align && align[ci] || "left",
      color: "var(--Color-Fg-Primary)",
      borderBottom: ri === rows.length - 1 ? "none" : "1px solid var(--Color-Border-Tertiary)"
    }
  }, cell)))))));
}
Object.assign(__ds_scope, { Table });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Table.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/section-apply.jsx
try { (() => {
const {
  Input,
  Dropdown,
  Checkbox,
  Button,
  Banner,
  InlineMessage,
  Card
} = window.B2CDesignSystem_f744f0;
function Apply({
  onDone
}) {
  const [name, setName] = React.useState("");
  const [region, setRegion] = React.useState();
  const [agree, setAgree] = React.useState(false);
  const err = name.length > 0 && name.length < 2;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "var(--Layout-Section-Padding_Y) 0",
      background: "var(--Color-Bg-Primary)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "var(--Layout-Inner-Narrow)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: "var(--Type-Main_title)",
      letterSpacing: "-0.02em"
    }
  }, "\uC2E0\uCCAD\uD558\uAE30"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: "var(--Layout-Gap-Title_to_content)"
    }
  }), /*#__PURE__*/React.createElement(Banner, {
    tone: "etc",
    style: {
      marginBottom: "var(--Layout-Gap-Content)"
    }
  }, "\uC0C1\uB2F4 \uC2E0\uCCAD \uD6C4 \uC601\uC5C5\uC77C \uAE30\uC900 1\uC77C \uC774\uB0B4\uC5D0 \uC5F0\uB77D\uB4DC\uB9BD\uB2C8\uB2E4."), /*#__PURE__*/React.createElement(Card, {
    padding: 28
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--Layout-Gap-Content)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--Spacing-Primitive-X4)"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    size: "L",
    label: "\uC774\uB984",
    placeholder: "\uD64D\uAE38\uB3D9",
    value: name,
    onChange: e => setName(e.target.value),
    status: err ? "error" : "default",
    message: err ? "이름을 2자 이상 입력해 주세요." : undefined
  }), /*#__PURE__*/React.createElement(Input, {
    size: "L",
    label: "\uD734\uB300\uD3F0 \uBC88\uD638",
    placeholder: "010-0000-0000",
    leadingIcon: "phone"
  })), /*#__PURE__*/React.createElement(Dropdown, {
    size: "L",
    label: "\uAC70\uC8FC \uC9C0\uC5ED",
    options: ["서울", "경기", "부산", "대구", "광주"],
    value: region,
    onChange: setRegion
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--Spacing-Primitive-X2)"
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    checked: agree,
    onChange: () => setAgree(!agree),
    label: "\uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1\xB7\uC774\uC6A9\uC5D0 \uB3D9\uC758\uD569\uB2C8\uB2E4. (\uD544\uC218)",
    description: "\uC218\uC9D1 \uD56D\uBAA9: \uC774\uB984, \uC5F0\uB77D\uCC98 \xB7 \uBCF4\uC720 \uAE30\uAC04: \uC0C1\uB2F4 \uC885\uB8CC \uD6C4 3\uAC1C\uC6D4"
  }), !agree ? /*#__PURE__*/React.createElement(InlineMessage, {
    tone: "neutral",
    icon: "info"
  }, "\uB3D9\uC758 \uD6C4 \uC2E0\uCCAD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.") : null), /*#__PURE__*/React.createElement(Button, {
    size: "XL",
    fullWidth: true,
    disabled: !agree || name.length < 2,
    onClick: onDone
  }, "\uC0C1\uB2F4 \uC2E0\uCCAD\uD558\uAE30")))));
}
window.Apply = Apply;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/section-apply.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/section-faq.jsx
try { (() => {
const {
  Icon
} = window.B2CDesignSystem_f744f0;
const QA = [["신청 후 언제부터 이용할 수 있나요?", "영업일 기준 1일 이내 개통되며, 개통 완료 시 문자로 안내드립니다."], ["약정 기간이 있나요?", "약정과 위약금이 없습니다. 원하실 때 해지하실 수 있습니다."], ["요금제를 변경할 수 있나요?", "매월 1회, 고객센터 또는 마이페이지에서 변경할 수 있습니다."]];
function Faq() {
  const [open, setOpen] = React.useState(0);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "var(--Layout-Section-Padding_Y) 0",
      background: "var(--Color-Bg-Grouped-Primary)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "var(--Layout-Inner-Narrow)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: "var(--Type-Main_title)",
      letterSpacing: "-0.02em"
    }
  }, "\uC790\uC8FC \uBB3B\uB294 \uC9C8\uBB38"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: "var(--Layout-Gap-Title_to_content)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--Color-Bg-Grouped-Secondary)",
      border: "1px solid var(--Color-Border-Tertiary)",
      borderRadius: "var(--Radius-Primitive-X4)",
      overflow: "hidden"
    }
  }, QA.map(([q, a], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      borderBottom: i === QA.length - 1 ? "none" : "1px solid var(--Color-Border-Tertiary)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setOpen(open === i ? -1 : i),
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      padding: "24px 28px",
      background: "transparent",
      border: "none",
      cursor: "pointer",
      textAlign: "left",
      font: "var(--Font-Weight-Medium) 18px/1.4 var(--Font-Family-Base)",
      color: "var(--Color-Fg-Primary)"
    }
  }, q, /*#__PURE__*/React.createElement(Icon, {
    name: open === i ? "chevron-up" : "chevron-down",
    size: 20,
    color: "var(--Color-Fg-Object-Strong)"
  })), open === i ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      padding: "0 28px 24px",
      font: "var(--Type-Body-M)",
      color: "var(--Color-Fg-Secondary)"
    }
  }, a) : null)))));
}
window.Faq = Faq;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/section-faq.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/section-features.jsx
try { (() => {
const {
  Card,
  Icon
} = window.B2CDesignSystem_f744f0;
const ITEMS = [{
  icon: "zap",
  t: "3분 신청",
  d: "본인 인증 한 번이면 별도 서류 없이 신청이 완료됩니다."
}, {
  icon: "shield-check",
  t: "위약금 없음",
  d: "약정 기간 없이 원하는 때 해지할 수 있습니다."
}, {
  icon: "headphones",
  t: "1:1 상담",
  d: "평일 09:00~18:00, 전담 상담사가 직접 안내합니다."
}];
function Features() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "var(--Layout-Section-Padding_Y) 0",
      background: "var(--Color-Bg-Primary)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "var(--Layout-Inner-Default)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: "var(--Type-Main_title)",
      letterSpacing: "-0.02em"
    }
  }, "\uC774\uB7F0 \uC810\uC774 \uB2E4\uB985\uB2C8\uB2E4"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: "var(--Layout-Gap-Title_to_content)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "var(--Layout-Gap-Content)"
    }
  }, ITEMS.map((it, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    padding: 28,
    title: it.t,
    description: it.d,
    media: /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "28px 28px 0"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 48,
        height: 48,
        borderRadius: "var(--Radius-Primitive-X3)",
        background: "var(--Color-Bg-Brand_subtle-Default)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: it.icon,
      size: 24,
      color: "var(--Color-Fg-Brand-Default)"
    })))
  })))));
}
window.Features = Features;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/section-features.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/section-footer.jsx
try { (() => {
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: "64px 0",
      background: "var(--Color-Bg-Surface-Inverse)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "var(--Layout-Inner-Default)",
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between",
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--Spacing-Primitive-X4)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--Font-Weight-Bold) 20px/1 var(--Font-Family-Base)",
      color: "var(--Color-Fg-Inverse-Primary)"
    }
  }, "B2C"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--Type-Caption)",
      color: "var(--Color-Fg-Inverse-Secondary)",
      lineHeight: 1.8
    }
  }, "\uACE0\uAC1D\uC13C\uD130 1600-0000 (\uD3C9\uC77C 09:00~18:00)", /*#__PURE__*/React.createElement("br", null), "\uC11C\uC6B8\uD2B9\uBCC4\uC2DC \u25CB\u25CB\uAD6C \u25CB\u25CB\uB85C 00 \xB7 \uC0AC\uC5C5\uC790\uB4F1\uB85D\uBC88\uD638 000-00-00000", /*#__PURE__*/React.createElement("br", null), "\u203B \uB85C\uACE0 \uC790\uC0B0\uC774 \uC81C\uACF5\uB418\uC9C0 \uC54A\uC544 \uC6CC\uB4DC\uB9C8\uD06C\uB97C Pretendard Bold\uB85C \uC870\uD310\uD588\uC2B5\uB2C8\uB2E4.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 48
    }
  }, [["서비스", ["요금제", "단말기", "혜택"]], ["고객지원", ["자주 묻는 질문", "1:1 문의", "공지사항"]]].map(([t, ls], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--Spacing-Primitive-X3)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--Font-Weight-SemiBold) 14px/1 var(--Font-Family-Base)",
      color: "var(--Color-Fg-Inverse-Primary)"
    }
  }, t), ls.map((l, j) => /*#__PURE__*/React.createElement("a", {
    key: j,
    href: "#",
    style: {
      font: "var(--Type-Body-S)",
      color: "var(--Color-Fg-Inverse-Secondary)",
      textDecoration: "none"
    }
  }, l)))))));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/section-footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/section-hero.jsx
try { (() => {
const {
  Button,
  Badge
} = window.B2CDesignSystem_f744f0;
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "var(--Layout-Section-Padding_Y) 0",
      background: "var(--Color-Bg-Secondary)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "var(--Layout-Inner-Default)",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      gap: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "var(--Spacing-Primitive-X6)"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "promotion",
    appearance: "light"
  }, "9\uC6D4 \uD55C\uC815 \xB7 \uCCAB \uB2EC 50% \uD560\uC778"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: "var(--Type-Main_title)",
      letterSpacing: "-0.02em",
      color: "var(--Color-Fg-Primary)"
    }
  }, "\uD544\uC694\uD55C \uC21C\uAC04\uC5D0,", /*#__PURE__*/React.createElement("br", null), "\uAC00\uC7A5 \uC26C\uC6B4 \uC120\uD0DD"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--Type-Sub_title)",
      color: "var(--Color-Fg-Secondary)"
    }
  }, "\uBCF5\uC7A1\uD55C \uC808\uCC28 \uC5C6\uC774 3\uBD84\uC774\uBA74 \uC2E0\uCCAD\uC774 \uB05D\uB0A9\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--Spacing-X_Gap-UI_over28H)",
      marginTop: "var(--Spacing-Primitive-X3)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "XL",
    variant: "brand",
    trailingIcon: "chevron-right"
  }, "3\uBD84 \uB9CC\uC5D0 \uC2E0\uCCAD\uD558\uAE30"), /*#__PURE__*/React.createElement(Button, {
    size: "XL",
    variant: "outline"
  }, "\uC694\uAE08\uC81C \uBE44\uAD50")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--Type-Caption)",
      color: "var(--Color-Fg-Tertiary)"
    }
  }, "\u203B \uC2E0\uADDC \uAC00\uC785 \uACE0\uAC1D \uB300\uC0C1\uC774\uBA70 \uC0AC\uC804 \uACE0\uC9C0 \uC5C6\uC774 \uBCC0\uACBD\uB418\uAC70\uB098 \uC885\uB8CC\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 380,
      height: 320,
      flex: "0 0 auto",
      borderRadius: "var(--Radius-Primitive-X6)",
      background: "var(--Color-Bg-Surface-Strong)",
      border: "1px solid var(--Color-Border-Tertiary)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      font: "var(--Type-Body-S)",
      color: "var(--Color-Fg-Tertiary)"
    }
  }, "\uC774\uBBF8\uC9C0 \uC601\uC5ED", /*#__PURE__*/React.createElement("br", null), "(\uC6D0\uBCF8 \uC18C\uC2A4\uC5D0 \uC774\uBBF8\uC9C0 \uC790\uC0B0\uC774 \uC5C6\uC5B4 \uBE44\uC6CC \uB460)")));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/section-hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/section-plans.jsx
try { (() => {
const {
  Table,
  Badge,
  Button,
  Chip
} = window.B2CDesignSystem_f744f0;
const ROWS = {
  "전체": [["베이직", "19,000원", "5GB", "기본 통화"], ["스탠다드", "29,000원", "무제한", "기본 통화"], ["프리미엄", "39,000원", "무제한", "무제한 통화"]],
  "데이터 중심": [["스탠다드", "29,000원", "무제한", "기본 통화"], ["프리미엄", "39,000원", "무제한", "무제한 통화"]],
  "가성비": [["베이직", "19,000원", "5GB", "기본 통화"]]
};
function Plans() {
  const [tab, setTab] = React.useState("전체");
  const rows = ROWS[tab].map(r => [/*#__PURE__*/React.createElement("strong", {
    style: {
      font: "var(--Font-Weight-SemiBold) 14px/1.5 var(--Font-Family-Base)"
    }
  }, r[0]), r[1], r[2], r[3], /*#__PURE__*/React.createElement(Button, {
    size: "XS",
    variant: "brand_subtle"
  }, "\uC120\uD0DD")]);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "var(--Layout-Section-Padding_Y) 0",
      background: "var(--Color-Bg-Grouped-Primary)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "var(--Layout-Inner-Narrow)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--Spacing-Primitive-X3)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: "var(--Type-Main_title)",
      letterSpacing: "-0.02em"
    }
  }, "\uC694\uAE08\uC81C"), /*#__PURE__*/React.createElement(Badge, {
    tone: "etc"
  }, "\uBD80\uAC00\uC138 \uD3EC\uD568")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: "var(--Layout-Gap-Title_to_content)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--Spacing-X_Gap-Chip)",
      marginBottom: "var(--Layout-Gap-Content)"
    }
  }, Object.keys(ROWS).map(k => /*#__PURE__*/React.createElement(Chip, {
    key: k,
    selected: tab === k,
    onClick: () => setTab(k)
  }, k))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--Color-Bg-Grouped-Secondary)",
      borderRadius: "var(--Radius-Primitive-X4)"
    }
  }, /*#__PURE__*/React.createElement(Table, {
    columns: ["요금제", "월 요금", "데이터", "통화", ""],
    align: ["left", "right", "right", "left", "right"],
    rows: rows
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "var(--Layout-Gap-Content) 0 0",
      font: "var(--Type-Caption)",
      color: "var(--Color-Fg-Tertiary)"
    }
  }, "\u203B \uD45C\uC2DC \uAE08\uC561\uC740 \uD560\uC778 \uC801\uC6A9 \uC804 \uAE30\uC900\uC774\uBA70, \uC2E4\uC81C \uCCAD\uAD6C \uAE08\uC561\uC740 \uAC00\uC785 \uC870\uAC74\uC5D0 \uB530\uB77C \uB2EC\uB77C\uC9C8 \uC218 \uC788\uC2B5\uB2C8\uB2E4.")));
}
window.Plans = Plans;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/section-plans.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.FAB = __ds_scope.FAB;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Banner = __ds_scope.Banner;

__ds_ns.InlineMessage = __ds_scope.InlineMessage;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Dropdown = __ds_scope.Dropdown;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.SearchField = __ds_scope.SearchField;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Toggle = __ds_scope.Toggle;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.BottomButtonGroup = __ds_scope.BottomButtonGroup;

__ds_ns.Header = __ds_scope.Header;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.Table = __ds_scope.Table;

})();
