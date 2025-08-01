import { createContext } from "react";
import type { Socket } from "./Socket";

export const SocketContext = createContext<Socket | null>(null);
