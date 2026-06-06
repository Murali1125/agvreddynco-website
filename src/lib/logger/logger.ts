type LogLevel = "debug" | "info" | "warn" | "error";

const isProduction = process.env.NODE_ENV === "production";

function format(level: LogLevel, message: string, meta?: Record<string, unknown>) {
  return {
    level,
    message,
    timestamp: new Date().toISOString(),
    ...(meta ? { meta } : {})
  };
}

export const logger = {
  debug(message: string, meta?: Record<string, unknown>) {
    if (!isProduction) {
      console.debug(format("debug", message, meta));
    }
  },
  info(message: string, meta?: Record<string, unknown>) {
    console.info(format("info", message, meta));
  },
  warn(message: string, meta?: Record<string, unknown>) {
    console.warn(format("warn", message, meta));
  },
  error(message: string, meta?: Record<string, unknown>) {
    console.error(format("error", message, meta));
  }
};
