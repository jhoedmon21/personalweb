import sys

# Try different PDF libraries
text_content = ""

# Try PyPDF2
try:
    import PyPDF2
    pdf_file = open('Professional_CV_Jhon.pdf', 'rb')
    pdf_reader = PyPDF2.PdfReader(pdf_file)
    for page in pdf_reader.pages:
        text_content += page.extract_text() + "\n"
    pdf_file.close()
    print(text_content)
    sys.exit(0)
except Exception as e:
    pass

# Try pdfplumber
try:
    import pdfplumber
    with pdfplumber.open('Professional_CV_Jhon.pdf') as pdf:
        for page in pdf.pages:
            text_content += page.extract_text() + "\n"
    print(text_content)
    sys.exit(0)
except Exception as e:
    pass

# Try pymupdf (fitz)
try:
    import fitz
    doc = fitz.open('Professional_CV_Jhon.pdf')
    for page in doc:
        text_content += page.get_text() + "\n"
    print(text_content)
    sys.exit(0)
except Exception as e:
    pass

print("ERROR: No PDF library available. Please install: pip install PyPDF2 or pip install pdfplumber")
sys.exit(1)
