"use client"

type Button =
  | React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    > & {
      text: string;
      onClick?: () => void;
      loading?: boolean;
      loadingText?: string;
    };

const Button = ({
  text,
  onClick,
  disabled,
  loading,
  loadingText,
  ...rest
}: Button) => {
  return (
    <button
      disabled={disabled}
      className="block w-full rounded-md bg-branch px-3.5 py-2.5 text-center text-lg font-semibold text-white shadow-sm hover:bg-branch-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-branch-dark
      disabled:bg-slate-300 disabled:cursor-not-allowed"
      onClick={onClick}
      {...rest}
    >
      {loading && (
        <div className="flex items-center justify-center">
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          {loadingText}
        </div>
      )}
      {!loading && text}
    </button>
  );
};

export default Button;
