import commonColor from "../../../../native-base-theme/variables/commonColor";

export default {
  iosHeader: {
    backgroundColor: "#fff"
  },
  aHeader: {
    backgroundColor: "#fff",
    borderColor: "#aaa",
    elevation: 3
  },
  iosHeaderTitle: {
    fontSize: 18,
    fontWeight: "500",
    color: commonColor.brandPrimary
  },
  aHeaderTitle: {
    fontSize: 18,
    fontWeight: "500",
    lineHeight: 26,
    marginTop: -5,
    color: commonColor.brandPrimary
  },
  orText: {
    fontSize: 14,
    color: "#fff",
    textAlign: "center",
    fontWeight: "400"
  },
  regBtnContain: {
    paddingVertical: 20,
    paddingHorizontal: 10
  },
  regBtn: {
    borderRadius: 0,
    height: 50,
    backgroundColor: commonColor.brandPrimary
  },
  googleLeft: {
    flex: 1,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#B6382C",
    borderBottomLeftRadius: 4,
    borderTopLeftRadius: 4
  },
  fbLeft: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    backgroundColor: "#233772",
    borderBottomLeftRadius: 4,
    borderTopLeftRadius: 4
  }
};
