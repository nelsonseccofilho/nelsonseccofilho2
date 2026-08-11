type SendIconProps = {
  className?: string;
};

export function SendIcon({ className }: SendIconProps) {
  return (
    <svg className={className} data-icon="send" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}
