from fastapi import FastAPI

app = FastAPI(title="QuickDraft AI")


@app.get("/")
def health():
    return {"status": "running", "app": "QuickDraft AI"}