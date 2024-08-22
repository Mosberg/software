import re
import json
import requests

# Fetch README.md content
readme_url = "https://raw.githubusercontent.com/LisaDziuba/Awesome-Design-Tools/master/README.md"
response = requests.get(readme_url)
readme_content = response.text

# Regular expression patterns to extract software information
pattern_name = r'\[(.+?)\]\((.+?)\)'
pattern_description = r'(?:(?<=\n)|(?<=^))(.+?)(?=\n-|$)'
pattern_download = r'\[(.+?)\]\((.+?)\)'
pattern_website = r'\[(.+?)\]\((.+?)\)'

# Initialize software list
software_list = {
    "title": "Awesome Design Tools",
    "description": "A curated list of design tools",
    "categories": {}
}

# Extract software information
for line in readme_content.splitlines():
    # Extract software name and link
    match = re.search(pattern_name, line)
    if match:
        name = match.group(1)
        link = match.group(2)
        
        # Extract software description
        description = ""
        for next_line in readme_content.splitlines()[readme_content.splitlines().index(line)+1:]:
            if next_line.startswith("- "):
                break
            description += next_line.strip() + " "
        
        # Extract software download link
        download = ""
        match = re.search(pattern_download, line)
        if match:
            download = match.group(2)
        
        # Extract software website
        website = ""
        match = re.search(pattern_website, line)
        if match:
            website = match.group(2)
        
        # Add software to list
        category = line.split("### ")[1].strip()
        if category not in software_list["categories"]:
            software_list["categories"][category] = []
        software_list["categories"][category].append({
            "name": name,
            "description": description.strip(),
            "download": download,
            "website": website
        })

# Write software list to JSON file
with open("software-list.json", "w") as f:
    json.dump(software_list, f, indent=4)