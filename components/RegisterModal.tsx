"use client"
import { useEffect, useRef } from "react";
import { registerUser } from "../app/actions/register";

// интерфейс формы
interface IFormData {
  email: string;
  password: string;
}

export function RegisterModal({isOpen, onClose}: { isOpen: boolean; onClose: () => void }) {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  if (!isOpen) return null;

  const handleRegister = async () => {
    const email = emailRef.current?.value ?? "";
    const password = passwordRef.current?.value ?? "";
    const confirm = confirmRef.current?.value ?? "";

    if (!email || !password || !confirm) {
      alert("Заполните все поля");
      return;
    }

    if (password !== confirm) {
      alert("Пароли не совпадаюют");
      return;
    }

    const formData: IFormData = { email, password };

    try {
      const result = await registerUser(formData);
      console.log(result); // результат регистрации
      onClose(); // закрываем модалку
    } catch (err) {
      console.error(err);
      alert("Ошибка регистрации");
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-opacity duration-200"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative rounded-2xl shadow-xl shadow-fuchsia-900/20 border border-white/10 bg-linear-to-br from-white via-fuchsia-50 to-fuchsia-100 dark:from-gray-900 dark:via-fuchsia-950 dark:to-fuchsia-900 p-6 w-[90%] max-w-md transform transition-all duration-200 animate-[modalShow_0.2s_ease-out]"
      >
        <div className="flex flex-col gap-1 text-fuchsia-800 font-semibold text-xl">Регистрация</div>

        <div className="flex flex-col gap-4 mt-4 pb-2">
          <input ref={emailRef} type="email" placeholder="Email" className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
          <input ref={passwordRef} type="password" placeholder="Пароль" className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
          <input ref={confirmRef} type="password" placeholder="Подтвердите пароль" className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
        </div>

        <div className="flex justify-end gap-3 mt-4">
          <button onClick={onClose} className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium transition-colors">Отмена</button>
          <button onClick={handleRegister} className="px-4 py-2 rounded-lg bg-fuchsia-600 text-white hover:bg-fuchsia-700 shadow-md shadow-fuchsia-900/20 font-medium transition-colors">Создать аккаунт</button>
        </div>
      </div>
    </div>
  );
}
