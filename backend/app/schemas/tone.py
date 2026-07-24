from enum import Enum


class Tone(str, Enum):
    PROFESSIONAL = "Professional"
    FRIENDLY = "Friendly"
    FORMAL = "Formal"
    CONFIDENT = "Confident"
    POLITE = "Polite"