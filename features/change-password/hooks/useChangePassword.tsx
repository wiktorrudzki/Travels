import { changePassword } from "@/dal/auth";
import { usePromiseWithLoading } from "@/hooks";
import { hashWithSha256ToHex } from "@/lib/crypto-js";
import { toaster } from "@/lib/native-base";
import { ChangePasswordRequest } from "@/types/auth";
import { uppercasedLetterRegex } from "@/utils/regex";
import { useTranslation } from "react-i18next";
import { object, ref, string } from "yup";

const useChangePassword = () => {
  const { t } = useTranslation(["register", "common", "account"]);

  const success = (callback: () => void) => {
    toaster({ text: t("account:pwd_changed"), variant: "success" });
    callback();
  };

  const failure = (e: string) => toaster({ text: e, variant: "danger" });

  const [change, isLoading] = usePromiseWithLoading(
    changePassword,
    success,
    failure
  );

  const schema = object().shape({
    oldPassword: string()
      .min(8, t("common:min_length", { length: 8 }))
      .required(t("common:required_field")),
    password: string()
      .min(8, t("common:min_length", { length: 8 }))
      .matches(
        uppercasedLetterRegex,
        t("common:one_uppercase_letter", { field: t("password") })
      )
      .required(t("common:required_field")),
    confirmPassword: string().oneOf([ref("password")], t("register:pwd_match")),
  });

  const onSubmit = (values: ChangePasswordRequest, callback: () => void) => {
    const oldPassword = hashWithSha256ToHex(values.oldPassword);
    const password = hashWithSha256ToHex(values.password);
    const confirmPassword = hashWithSha256ToHex(values.confirmPassword);

    change({ oldPassword, password, confirmPassword }, callback);
  };

  return { schema, isLoading, onSubmit };
};

export default useChangePassword;
