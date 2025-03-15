import { useMemo, useState } from "react";
import styles from "./styles.module.css";

const SortablePageableSearchableTable = ({
	data,
	columns,
	itemsPerPage = 10,
}) => {
	const [sortColumn, setSortColumn] = useState(null);
	const [sortDirection, setSortDirection] = useState("asc");
	const [currentPage, setCurrentPage] = useState(1);
	const [searchTerm, setSearchTerm] = useState("");

	const handleSort = (column) => {
		if (sortColumn === column) {
			setSortDirection(sortDirection === "asc" ? "desc" : "asc");
		} else {
			setSortColumn(column);
			setSortDirection("asc");
		}
	};

	const handlePageChange = (page) => {
		setCurrentPage(page);
	};

	const handleSearch = (event) => {
		setSearchTerm(event.target.value);
		setCurrentPage(1);
	};

	const sortedData = useMemo(() => {
		const filteredData = data.filter((item) => {
			for (const column of columns) {
				if (
					item[column.key] &&
					item[column.key]
						.toString()
						.toLowerCase()
						.includes(searchTerm.toLowerCase())
				) {
					return true;
				}
			}
			return false;
		});

		if (sortColumn) {
			filteredData.sort((a, b) => {
				const aValue = a[sortColumn.key];
				const bValue = b[sortColumn.key];

				if (aValue === bValue) return 0;

				if (sortDirection === "asc") {
					return aValue > bValue ? 1 : -1;
				} else {
					return aValue < bValue ? 1 : -1;
				}
			});
		}
		return filteredData;
	}, [data, sortColumn, sortDirection, searchTerm, columns]);

	const totalPages = Math.ceil(sortedData.length / itemsPerPage);
	const currentPageData = useMemo(() => {
		const startIndex = (currentPage - 1) * itemsPerPage;
		const endIndex = startIndex + itemsPerPage;
		return sortedData.slice(startIndex, endIndex);
	}, [sortedData, currentPage, itemsPerPage]);

	const pageNumbers = useMemo(() => {
		const pages = [];
		for (let i = 1; i <= totalPages; i++) {
			pages.push(i);
		}
		return pages;
	}, [totalPages]);

	return (
		<div className={styles.tableContainer}>
			<div className={styles.tableControls}>
				<input
					type="text"
					placeholder="Search..."
					value={searchTerm}
					onChange={handleSearch}
					className={styles.filterInput}
				/>
			</div>
			{sortedData.length > 0 ? (
				<>
					<table className={styles.table}>
						<thead>
							<tr>
								{columns.map((column) => (
									<th
										key={column.key}
										onClick={() => handleSort(column)}
										className={styles.sortableHeader}
									>
										{column.header}
										{sortColumn === column && (
											<span className={styles.sortIndicator}>
												{sortDirection === "asc" ? "▲" : "▼"}
											</span>
										)}
									</th>
								))}
							</tr>
						</thead>
						<tbody>
							{currentPageData.map((item, index) => (
								<tr key={index}>
									{columns.map((column) => (
										<td key={column.key}>{item[column.key]}</td>
									))}
								</tr>
							))}
						</tbody>
					</table>
					{totalPages > 1 && (
						<div className={styles.pagination}>
							{pageNumbers.map((page) => (
								<button
									key={page}
									onClick={() => handlePageChange(page)}
									disabled={page === currentPage}
								>
									{page}
								</button>
							))}
						</div>
					)}
				</>
			) : (
				<div class="theme-admonition theme-admonition-info admonition_xJq3 alert alert--danger">
					<div class="admonitionHeading_Gvgb">
						<span class="admonitionIcon_Rf37"><svg viewBox="0 0 14 16"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path></svg></span>Nothing Found</div>
						<div class="admonitionContent_BuS1">
					</div>
				</div>
			)}
		</div>
	);
};

export default SortablePageableSearchableTable;
